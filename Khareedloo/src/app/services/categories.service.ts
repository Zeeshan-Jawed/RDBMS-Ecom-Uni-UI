import { Injectable } from '@angular/core';
import{Categories} from '../models/Categories';
@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories:Categories[];
  constructor()  { 
    this.categories=[
      {list:'Food',
       image:'https://i.imgur.com/Cey1Ud1.jpeg'},
      {list:'Mobile',
    image:'https://i.imgur.com/AdmCUzX.png'},
      {list:'TV'},
      {list:'Tickets'}
    ] }
}
