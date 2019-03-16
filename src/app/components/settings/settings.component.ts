import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { CategoryService } from 'src/app/services/categories/category.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  constructor(
    public categoryService: CategoryService,
    private afFirestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.categories();
  }

  async categories () {
    const categories = [];
    const querySnapshot = await this.categoryService.getAllCategories();
    querySnapshot.subscribe(docs => {
      docs.forEach(doc => categories.push[doc.data().name]);
    });

    return categories;
  }

}
