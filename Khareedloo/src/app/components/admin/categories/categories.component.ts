import { Component, OnInit } from '@angular/core';
import{Categories} from '../../../models/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Categories[];

  constructor() { 
    this.categories=[
      {list:'Food'},
      {list:'Mobile'},
      {list:'TV'},
      {list:'Kids'}
    ] }

  ngOnInit() {
  }

}
