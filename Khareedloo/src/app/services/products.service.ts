import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './categories.service';
import { SubCategoriesService } from './sub-categories.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url="http://localhost:8080/api/product/";
  categories: any;
  subcategories: Object;
  
  constructor(private http:HttpClient,private _categoriesService:CategoriesService,
    private _SubcategoryService:SubCategoriesService) {
    let resp=this._categoriesService.fetchCategory()
      resp.subscribe((data)=>this.categories=data);
      let res=this._SubcategoryService.fetchSubCategory()
      res.subscribe((data)=>this.subcategories=data);
      setTimeout(() => {
        
      }, 1000);
}
addproduct(product){
  return this.http.post(this.url,product,{responseType:'text' as 'json'})
}
fetchproduct(){
 return this.http.get(this.url)
}
fetchproductById(id){
 return this.http.get(this.url+id)
}
updateproduct(product,id){
 return this.http.put(this.url+id,product,{responseType:'text' as 'json'});
}
deleteproductById(id){
  return this.http.delete(this.url+id,{responseType:'text' as 'json'});
 
}
}
