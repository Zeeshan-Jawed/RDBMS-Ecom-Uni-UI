import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories:any;
  constructor(private _CategoryService:CategoriesService) {}
  
  ngOnInit() {
    
      setTimeout(() => {
       let resp=this._CategoryService.fetchCategory();
       resp.subscribe((data)=>this.categories=data)
      }, 1000);
  }
  
}

