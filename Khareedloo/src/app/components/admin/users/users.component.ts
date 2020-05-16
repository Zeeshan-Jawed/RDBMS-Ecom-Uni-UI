import { Component, OnInit, AfterContentInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/Users';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit,AfterContentInit {
  today: number = Date.now();
  users:any;
  userid:number;
  message:any;
  chk:any;
  constructor(private _UsersService:UsersService,private router:Router) { }
  ngAfterContentInit(){
    this.Onfetchuser();
  }

  ngOnInit() {  }
  
  onAddUser(userForm:Users){
    userForm.registationdate=this.today;
    // this.users.push(userForm);
    let res=this._UsersService.AddUser(userForm);
    res.subscribe((data)=>this.message=data);
    this.Onfetchuser();
  }

   Onfetchuser(){
     setTimeout(() => {
      let resp=this._UsersService.fetchuser();
      resp.subscribe((data)=>this.users=data)
     }, 1000);
  }
  onedit(user){
      this.router.navigate(["admin/users/",user.id]);   
  }
  ondeletebyid(user){
    let res=this._UsersService.deletebyid(user.id);
    res.subscribe((data)=>this.message=data)
    this.Onfetchuser();
  }
}
