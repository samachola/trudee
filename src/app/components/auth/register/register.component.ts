import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { PartnersService } from '../../../services/partners/partners.service';
import { CategoryService } from '../../../services/categories/category.service';
import { Router } from '@angular/router';

import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  user = {
    name: '',
    email: '',
    phone: '',
    idcard: '',
    category: '',
    location: '',
    lat: null,
    lng: null,
    password: '',
    cpassword: '',
  };

  categories = [];
  category: string;
  error: string;

  lat: number;
  lng: number;
  location: string;
  profilePicture: File;

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  constructor(
    public authService: AuthService,
    public partnerService: PartnersService,
    public categoryService: CategoryService,
    public afAuth: AngularFireAuth,
    public router: Router,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.getAllCategories();
  }

  onSubmit() {
    const isValid = this.validUserData();
    this.authService.emailSignup(this.user)
      .then(res => {
        console.log(`uid: ${res.user.uid}`);
        this.createUser(res.user.uid, this.user);
      })
      .catch(err => {
        console.log(err);
        if (err && err.code === 'auth/email-already-in-use') {
          this.error = err.message;
        } else {
          this.error = 'Something went wrong! Please try again';
        }
      });
  }

  validUserData() {
    // TODO validate user data
    const { name, email, idcard, phone, category, location, lat, lng } = this.user;
    if (name === '' || name === undefined) {
      this.error = 'Name is required';
    }


    return false;
  }

  /**
   * Create new user document
   *
   * @param uid - userId
   * @param user - userDetails
   */
  createUser(uid, user) {
    const { email, name, phone } = user;
    const userDetails = {
      name,
      email
    };

    this.authService.newUser(uid, userDetails)
      .then(res => {
        this.createPartner(uid, user);
      })
      .catch(err => console.log(err));
  }

  /**
   * Create new partner details.
   *
   * @param uid - userId
   * @param user - userDetails
   */
  createPartner(uid, user) {
    const { name, email, idcard, phone, category, location, lat, lng } = user;
    const partnerdetails = { name, email, idcard, phone, location, lat, lng, category };

    this.partnerService.newPartner(uid, partnerdetails)
      .then(res => {
        console.log({ response: res });
        console.log('We should get response {Object}');
        this.router.navigate(['/login']);
      })
      .catch(err => console.log({ response: err }));
  }

  public handleAddressChange(address) {
    // Do some stuff
    console.log(address);

    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.location = address.formatted_address;
  }

  onChange(event): void {
    this.user.category = event.target.value;
  }

  onFileChange(event): void {
    console.log('onFileChange');
  }

  async getAllCategories() {
    const categoriesQuerySnapshot = await this.categoryService.getAllCategories();
    categoriesQuerySnapshot.subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        const category = { ...doc.data() };
        this.categories.push(category);
      });
    });
  }

}
