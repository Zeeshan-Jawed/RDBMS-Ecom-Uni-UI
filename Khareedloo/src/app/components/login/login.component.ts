import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  today: number = Date.now();
  users:any;
  userid:number;
  message:any;
  constructor(private _UsersService:UsersService) { }

  ngOnInit() {
  }
  onAddUser(userForm){
    userForm.registationdate=this.today;
    // this.users.push(userForm);
    let res=this._UsersService.AddUser(userForm);
    res.subscribe((data)=>this.message=data);
  }
}
