import { Injectable } from '@angular/core';
import { Categories } from '../models/Categories';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url="http://localhost:8080/api/category/";
  
  constructor(private http:HttpClient) {
}
addCategory(category){
  return this.http.post(this.url,category,{responseType:'text' as 'json'})
}
fetchCategory(){
 return this.http.get(this.url)
}
fetchCategoryById(id){
 return this.http.get(this.url+id)
}
updateCategory(category,id){
 return this.http.put(this.url+id,category,{responseType:'text' as 'json'});
}
deleteCategoryById(id){
  return this.http.delete(this.url+id,{responseType:'text' as 'json'});
 
}
}
