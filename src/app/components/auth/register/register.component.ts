import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { PartnersService } from '../../../services/partners/partners.service';
import { CategoryService } from '../../../services/categories/category.service';

import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {};
  categories = [];
  category: string;
  error: string;

  lat: number;
  lng: number;
  location: string;
  profilePicture: File;

  @ViewChild('search') public searchElement: ElementRef;
  constructor(
    public authService: AuthService,
    public partnerService: PartnersService,
    public categoryService: CategoryService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit() {
    this.getAllCategories();

    this.mapsAPILoader.load().then(
      () => {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types: ['address'] });
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();

            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.location = place.formatted_address;

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }
          });
        });
      }
    );
  }

  onSubmit() {
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
    const { name, email, idcard, phone } = user;
    const partnerdetails = { name, email, idcard, phone, location: this.location, lat: this.lat, lng: this.lng, category: this.category };

    console.log(partnerdetails);

    this.partnerService.newPartner(uid, partnerdetails)
      .then(res => {
        console.log({ response: res });
        console.log('We should get response {Object}');
      })
      .catch(err => console.log({ response: err }));
  }

  onChange(event): void {
    this.category = event.target.value;
  }

  onFileChange(event): void {
    console.log('onFileChange');
  }

  getAllCategories() {
    this.categoryService.getAllCategories()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const category = { ...doc.data() };
          this.categories.push(category);
        });
      })
      .catch(err => console.log(err));
  }

}
