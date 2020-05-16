import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  id: number;
  category:any={};
  message: any;

  constructor(private _CategoriesService:CategoriesService,private route:ActivatedRoute) { 
    this.id=this.route.snapshot.params['id']
    this.getbyid();
  }

  ngOnInit() {
  }
  getbyid(){
    let res= this._CategoriesService.fetchCategoryById(this.id);
      res.subscribe((data)=>this.category=data);
      setTimeout(() => {
       }, 1000);
  }
  onUpdateCategory(categoryForm){
    
    let res=this._CategoriesService.updateCategory(categoryForm,this.id);
      res.subscribe((data)=>this.message=data);
  }
}
