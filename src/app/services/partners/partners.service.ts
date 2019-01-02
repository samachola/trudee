import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  partnersRef: any;
  constructor(
    public db: AngularFirestore
  ) {
    this.partnersRef = this.db.collection('partners');
  }


  /**
   * Registers a new partner
   *
   * @param uid - userId
   * @param data - partnerDetails
   */
  newPartner(uid, data): Promise<any> {
    return this.partnersRef.doc(uid).set({
      ...data
    });
  }

  /**
   * Get all available partners
   */
  async getAllPartners() {

    return await this.db.collection('partners').get().toPromise();

  }

  /**
   * filter partners
   * @param category - partner's category
   **/
  async filterPartners(category: String) {
    return await this.db.collection('partners', ref => ref.where('category', '==', category)).get().toPromise();
  }

  /**
   * Get single partner
   * @param partnerId - partnerId
   */
  async getPartner(partnerId) {

    return await this.partnersRef.doc(partnerId).get().toPromise();

  }
}
