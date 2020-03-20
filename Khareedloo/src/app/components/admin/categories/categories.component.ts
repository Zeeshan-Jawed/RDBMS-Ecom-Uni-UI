import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories=[];
  indexitem:number;
  constructor(private _categoriesService:CategoriesService) {}
  ngOnInit() {
    this.categories=this._categoriesService.categories;
  }
addcategory(cat,img){
  this.categories.push({
    list:cat.value,
    image:img.value
  });
 
}
removecategory(item){
  this.categories.splice(item,1)
  
}
indexcategory(i){
  this.indexitem=i
}
}
