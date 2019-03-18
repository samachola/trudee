import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnersService } from 'src/app/services/partners/partners.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {
  id: any;
  partner = {
    lat: 1313123,
    lng: -34.5,
    category: '',
  };
  category: any;
  date: any;
  booking = {
    description: '',
  };
  settings = false;
  profile = true;
  timeline: boolean;
  currentUser = true;
  constructor(
    public route: ActivatedRoute,
    public partnerService: PartnersService,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getPartner(this.id);
    });
  }

  async getPartner(id) {

    const partner = await this.partnerService.getPartner(id);
    this.partner = partner.data();
    console.log({ partner: this.partner });
  }

  async requestPro() {
    console.log({ date: this.date, description: this.booking.description, category: this.partner.category });
  }

  get isLoggedIn() {
    return this.afAuth.auth.currentUser;
  }


  tab(state) {
    switch (state) {
      case 'profile':
        this.settings = false;
        this.timeline = false;
        this.profile = true;

        break;
      case 'settings':
        this.profile = false;
        this.timeline = false;
        this.settings = true;

        break;
      case 'timeline':
        this.profile = false;
        this.settings = false;
        this.timeline = true;

        break;
      default:
        this.settings = false;
        this.timeline = false;
        this.profile = true;
    }
  }

  /**
  * Set select dropdown value.
  * @param event - select dropdown onchange event.
  */
  public onChange(event): void {
    this.category = event.target.value;
  }

  /**
   * Set date value.
   * @param event - set date event.
   */
  public onDateChange(event): void {
    this.date = event.target.value;
  }

}
