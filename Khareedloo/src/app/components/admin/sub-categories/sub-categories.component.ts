import { Component, OnInit } from '@angular/core';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  categories;
  subcategories=[];
  
  constructor(private _SubCategories:SubCategoriesService) {}
  ngOnInit() {
    this.subcategories=this._SubCategories.subcategories
    this.categories=this._SubCategories.categories
  }
  onSubmit(subcategoryForm :NgForm){
    console.log(subcategoryForm)
    this.subcategories.push({
      catname:subcategoryForm.value.categoryname,
      subname:subcategoryForm.value.subcategoryname,
      subimage:subcategoryForm.value.subcategoryimage
    })
    }
}
