import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { PartnersService } from '../../services/partners/partners.service';
import { CategoryService } from '../../services/categories/category.service';
import { MapsAPILoader } from '@agm/core';
/// <reference types="@types/googlemaps" />


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  lat: number;
  lng: number;
  location: string;
  category: string;
  categories = [];
  partners = [];


  @ViewChild('search') public searchElement: ElementRef;
  constructor(
    public partnerService: PartnersService,
    public categoryService: CategoryService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.getAllPartners();
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

  onChange(event): void {
    this.category = event.target.value;
  }

  filterPartners() {
    console.log('filter queries here');
    console.log({ filter: { location: this.location, lat: this.lat, lng: this.lng, category: this.category } });
  }

  /**
   * Get all partners
   */
  getAllPartners() {
    this.partnerService.getAllPartners()
      .then(querysnapShot => {
        querysnapShot.forEach(doc => {
          const partnerDetails = { ...doc.data(), id: doc.id };
          this.partners.push(partnerDetails);
          console.log({ doc: doc.data() });
        });
      })
      .catch(err => console.log(err));
  }

  /**
   * Get categories
   */
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
