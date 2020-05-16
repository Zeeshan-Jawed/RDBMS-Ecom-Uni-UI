import { Component, OnInit } from '@angular/core';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SubCategories } from 'src/app/models/SubCategories';
@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  binding:String="Hello";
  message: any;
  categories:any;
  subcategories: Object;
  
  constructor(private _SubCategoryService:SubCategoriesService,private router:Router) {}
  ngOnInit() {
    this.getcatgories();
    this.categories=this._SubCategoryService.categories;
    this.onFetchSubCategories()
  }
  getcatgories(){
    setTimeout(() => {
      this.categories=this._SubCategoryService.categories;
    }, 3000);
  }
  
  onAddSubCategory(subcategoryForm:SubCategories){
    console.log(subcategoryForm)
    let res=this._SubCategoryService.addSubCategory(subcategoryForm);
    res.subscribe((data)=>this.message=data);
    this.onFetchSubCategories();
    
    
  }
  onFetchSubCategories(){
    setTimeout(() => {
     let resp=this._SubCategoryService.fetchSubCategory();
     resp.subscribe((data)=>this.subcategories=data)
    }, 1000);
 }
 onEdit(subcategory){
     this.router.navigate(["admin/sub-categories/edit",subcategory.id]);   
 }
 onDeleteById(subcategory){
   let res=this._SubCategoryService.deleteSubCategoryById(subcategory.id);
   res.subscribe((data)=>this.message=data)
   this.onFetchSubCategories();
 }
}
