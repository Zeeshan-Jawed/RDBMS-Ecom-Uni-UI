import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgForm } from '@angular/forms';

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
// addcategory(cat,img){
//   this.categories.push({
//     list:cat.value,
//     image:img.value
//   });
 
// }
onSubmit(categoryForm :NgForm){
console.log(categoryForm.value.categoryname)
this.categories.push({
  name:categoryForm.value.categoryname,
  image:categoryForm.value.categoryimage
})
}
removecategory(item){
  this.categories.splice(item,1)
  
}
indexcategory(i){
  this.indexitem=i
}
}
