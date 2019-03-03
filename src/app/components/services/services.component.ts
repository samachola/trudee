import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { PartnersService } from '../../services/partners/partners.service';
import { CategoryService } from '../../services/categories/category.service';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';


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


  // @ViewChild('search') public searchElement: ElementRef;
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  constructor(
    public partnerService: PartnersService,
    public categoryService: CategoryService,
    private ngZone: NgZone,
    public router: Router,
  ) { }

  ngOnInit() {
    this.getAllPartners();
    this.getAllCategories();
  }

  onChange(event): void {
    this.category = event.target.value;
  }

  public handleAddressChange(address) {
    // Do some stuff
    console.log(address);

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

}
