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
}
