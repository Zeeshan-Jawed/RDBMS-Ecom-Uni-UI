import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesComponent } from '../components/admin/categories/categories.component';
import { CategoriesService } from './categories.service';


@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {
  url="http://localhost:8080/api/subcategory/";
  categories: Object;

  
  
  constructor(private http:HttpClient,private _categoriesService:CategoriesService) {
    
      let resp=this._categoriesService.fetchCategory()
      resp.subscribe((data)=>this.categories=data)
      setTimeout(() => {
        console.log(this.categories)
      }, 1000);
    
    }
   
  
 
  addSubCategory(subcategory){
    return this.http.post(this.url,subcategory,{responseType:'text' as 'json'})
  }
  fetchSubCategory(){
   return this.http.get(this.url)
  }
  fetchSubCategoryById(id){
   return this.http.get(this.url+id)
  }
  updateSubCategory(subcategory,id){
   return this.http.put(this.url+id,subcategory,{responseType:'text' as 'json'});
  }
  deleteSubCategoryById(id){
    return this.http.delete(this.url+id,{responseType:'text' as 'json'});
  }
}
