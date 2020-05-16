import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private _categoriesService:CategoriesService) {}
  categories={};
  ngOnInit() {
    // this.categories=this._categoriesService.categories;
  }
  
}

