import { Injectable } from '@angular/core';
import { Users } from '../models/Users';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url="http://localhost:8080/api/appUser/";
users:Users[];
// httpoptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
  constructor(private http:HttpClient) {
    
    this.users=[
      {
        name:"Zeeshan",
        password:"12345",
        contactNo:998484,
        email:"jawedzeeshan@gmail.com",
        registerdate:null,
        address:"nazimabad"}
    ]
   }
   AddUser(user){
     
     return this.http.post(this.url,user,{responseType:'text' as 'json'})
   }
  //  fetchuser(){
  //   return this.http.get(this.url+"get/",{responseType:'text' as 'json'})
  // }
}
