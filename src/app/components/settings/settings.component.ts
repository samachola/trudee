import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { CategoryService } from 'src/app/services/categories/category.service';
import { AuthService } from '../../services/auth/auth.service';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, subscribeOn, first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  categories = [];
  lat: any;
  lng: any;
  location: string;
  category: string;
  currentUser = {};
  id: string;

  task: any;
  uploadProgress: any;
  profilePicture: File;
  partnerDetails: any;

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  constructor(
    public categoryService: CategoryService,
    private afFirestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private storage: AngularFireStorage,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.getCategories();
    this.getPartnerDetails();

    const { id, image } = JSON.parse(localStorage.getItem('currentUser'));
    const userSubscription = await this.afFirestore.collection('users').doc(id).get();
    userSubscription.subscribe(currentuser => this.currentUser = currentuser.data());
  }

  onChange(event): void {
    this.category = event.target.value;
  }

  async getCategories () {
    const querySnapshot = await this.categoryService.getAllCategories();
    querySnapshot.subscribe(docs => {
      docs.forEach(doc => {
        const category = { ...doc.data() };
        this.categories.push(category);
      });
    });
  }

  async getPartnerDetails() {
    const { id } = JSON.parse(localStorage.getItem('currentUser'));
    const partnerQuerySnapshot = await this.afFirestore.collection('partners').doc(id).get();
    partnerQuerySnapshot.pipe(
      map(doc => doc.data()),
    ).subscribe(partner => {
      this.category = partner.category;
      this.id = partner.id || '';
      this.location = partner.location || '';
      this.partnerDetails = partner;
    });

  }

  public handleAddressChange(address) {
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.location = address.formatted_address;
  }

  async onFileChange(event) {
    const { id } = JSON.parse(localStorage.getItem('currentUser'));
    const storageRef = this.storage.ref(`avatars/${id}/profile.jpg`);
    this.uploadProgress = await storageRef.put(event.target.files[0]).percentageChanges();

    this.uploadProgress.pipe(
      map(data => data === 100),
    ).subscribe(() => {
      storageRef.getDownloadURL().subscribe(url => {
        this.updateUserImage(url);
      });
    });
  }

  async updateUserImage(url) {
    const { id } = JSON.parse(localStorage.getItem('currentUser'));

    await this.afFirestore.collection('users').doc(id).update({ image: url });

    if (this.isPartner()) {
      // update partner image
      await this.afFirestore.collection('partners').doc(id).update({ image: url });
    }
    this.currentUser = { image: url, ...this.currentUser};
  }

  // check if user is a partner
  isPartner() {
    const { id } = JSON.parse(localStorage.getItem('currentUser'));
    return this.afFirestore.collection('partners').doc(id).valueChanges().pipe(first()).toPromise();
  }



  onSubmitUser() {
    console.log(this.currentUser);
  }

  onSubmitPartner() {
    console.log(
      {
        id: this.id,
        location: this.location,
        category: this.category,
      }
    );
    if (this.afAuth.auth.currentUser) {
      // do something
      this.afFirestore
        .collection('partners')
        .doc(this.afAuth.auth.currentUser.uid)
        .update(
          {
            id: this.id,
            location: this.location,
            category: this.category,
          }
        );
    }

    this.getPartnerDetails();
  }

}
