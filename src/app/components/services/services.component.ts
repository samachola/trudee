import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { PartnersService } from '../../services/partners/partners.service';
import { CategoryService } from '../../services/categories/category.service';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { AngularFirestore } from '@angular/fire/firestore';

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

  google: any;
  geofire: any;


  // @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  constructor(
    public partnerService: PartnersService,
    public categoryService: CategoryService,
    private ngZone: NgZone,
    public router: Router,
    private afFirestore: AngularFirestore,
  ) {}

  ngOnInit() {
    this.getAllPartners();
    this.getAllCategories();
  }

  onChange(event): void {
    this.category = event.target.value;
  }

  public handleAddressChange(address) {
    this.lat = address.geometry.location.lat();
    this.lng = address.geometry.location.lng();
    this.location = address.formatted_address;
  }

  async filterPartners() {
    const filteredPartners = [];
    const querySnapshot = await this.partnerService.filterPartners(this.category);
    for (const doc of querySnapshot.docs) {
      filteredPartners.push({ ...doc.data(), id: doc.id });
    }

    this.partners = filteredPartners;
    if (this.lat && this.lng) {
      this.partners = this.partners.filter(partner => {
        const { lat, lng } = partner;
        const distance = this.distanceInKm(this.lat, this.lng, lat, lng);
        return distance < 5;
      });
    }
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
        });
      })
      .catch(err => console.log(err));
  }

  /**
   * Get categories
   */
  async getAllCategories() {
    const categoryQuerySnapshot = await this.categoryService.getAllCategories();
    categoryQuerySnapshot.subscribe(querySnapshot => {
      querySnapshot.forEach(doc => {
        const category = { ...doc.data() };
        this.categories.push(category);
      });
    });
  }

  toProfilePage(id) {
    this.router.navigate(['services', id]);
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  distanceInKm(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return earthRadiusKm * c;
  }

}
