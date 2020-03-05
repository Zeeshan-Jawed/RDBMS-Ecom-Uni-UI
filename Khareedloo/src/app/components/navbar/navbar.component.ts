import { Component, OnInit } from '@angular/core';
import{Categories} from '../models/Categories';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  categories:Categories[];

  constructor() { 
    this.categories=[
      {list:'Food'},
      {list:'Mobile'},
      {list:'TV'}
    ]
      
  }

  ngOnInit() {
    
  }
  
}

