import { Injectable } from '@angular/core';
import { Users } from '../models/Users';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
url="http://localhost:8080/api/appUser/";
users:Users[];
// httpoptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
  constructor(private http:HttpClient) {
    
   }
   AddUser(user){
     return this.http.post(this.url,user,{responseType:'text' as 'json'})
   }
   fetchuser(){
    return this.http.get(this.url)
  }
  fetchbyid(id){
    return this.http.get(this.url+id)
  }
  updateuser(user,id){
    
    return this.http.put(this.url+id,user,{responseType:'text' as 'json'});
  }
  deletebyid(id){
     return this.http.delete(this.url+id,{responseType:'text' as 'json'});
    
  }

}
