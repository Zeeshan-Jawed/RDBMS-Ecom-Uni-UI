import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Categories } from 'src/app/models/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  message: any;
  categories: Object;
  
  constructor(private _CategoryService:CategoriesService,private router:Router) {}
  ngOnInit() {this.onFetchCategories();}
  onAddCategory(categoryForm:Categories){
    let res=this._CategoryService.addCategory(categoryForm);
    res.subscribe((data)=>this.message=data);
    this.onFetchCategories();
  }
  onFetchCategories(){
    setTimeout(() => {
     let resp=this._CategoryService.fetchCategory();
     resp.subscribe((data)=>this.categories=data)
    }, 1000);
 }
 onEdit(category){
     this.router.navigate(["admin/categories/edit",category.id]);   
 }
 onDeleteById(category){
   let res=this._CategoryService.deleteCategoryById(category.id);
   res.subscribe((data)=>this.message=data)
   this.onFetchCategories();
 }
}
