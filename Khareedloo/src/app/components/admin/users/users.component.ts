import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/Users';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  today: number = Date.now();
  users=[];
  message:any;
  // chk:any;
  constructor(private _UsersService:UsersService) { }

  ngOnInit() {
    this.users=this._UsersService.users;
    
    // this.Onfetchuser();
    
  }
  onAddUser(userForm:Users){
    userForm.registerdate=this.today;
    console.log(userForm.registerdate);
    this.users.push(userForm);
    let res=this._UsersService.AddUser(userForm);
    res.subscribe((data)=>this.message=data)
    
  }
  // Onfetchuser(){
  //   let resp=this._UsersService.fetchuser();
  //   resp.subscribe((data)=>this.chk=data)
  // }
}
