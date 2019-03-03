import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public db: AngularFirestore) { }

  /**
   * Get all categories
   */
  async getAllCategories() {
    return await this.db.collection('categories').get();
  }
}
