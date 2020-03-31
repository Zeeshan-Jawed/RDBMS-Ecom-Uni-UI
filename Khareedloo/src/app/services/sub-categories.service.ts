import { Injectable } from '@angular/core';
import { CategoriesService } from './categories.service';
import { SubCategories } from '../models/SubCategories';


@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {
  categories=[];
  subcategories:SubCategories[];
  
  constructor(private _categoriesService:CategoriesService) {
    this.categories=this._categoriesService.categories;
    this.subcategories = [
      
      { catname:'Electronic Device',
        subname: 'Smartphones',
        subimage: 'https://www.gizmochina.com/wp-content/uploads/2019/02/smartphones.jpg'
      },
      { catname:'Electronic Accessories',
        subname: 'Storage',
        subimage: 'https://www.ihaha.rw/wp-content/uploads/2019/04/slider2.png'
      }]
      
   }
}
