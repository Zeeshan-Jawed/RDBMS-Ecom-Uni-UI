import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategoriesService } from 'src/app/services/sub-categories.service';

@Component({
  selector: 'app-sub-category-detail',
  templateUrl: './sub-category-detail.component.html',
  styleUrls: ['./sub-category-detail.component.css']
})
export class SubCategoryDetailComponent implements OnInit {
  id: number;
  subcategory:any={};
  message: any;
  category:any;
  constructor(private _SubCategoryService:SubCategoriesService,private route:ActivatedRoute) { 
    this.id=this.route.snapshot.params['id']
    this.getbyid();
  }

  ngOnInit() {
    setTimeout(() => {
      this.category=this.subcategory.category;
      console.log(this.category)
  },1000)
  
}
  getbyid(){
    let res= this._SubCategoryService.fetchSubCategoryById(this.id);
      res.subscribe((data)=>this.subcategory=data);
      setTimeout(() => {
      }, 1000);
      
  }
  onUpdateSubCategory(subCategoryForm){
    console.log(subCategoryForm);
    let res=this._SubCategoryService.updateSubCategory(subCategoryForm,this.id);
      res.subscribe((data)=>this.message=data);
  }
 
}
