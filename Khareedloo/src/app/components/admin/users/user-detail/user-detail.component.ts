import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/Users';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  id:number;
  user: any={};
  message: Object;
  constructor(private _UsersService:UsersService,private route:ActivatedRoute) { }
  ngOnInit() {
    // console.log(this.route.snapshot.params['id'])
    this.id=this.route.snapshot.params['id']
    this.getbyid()
  }
getbyid(){
  let res= this._UsersService.fetchbyid(this.id);
    res.subscribe((data)=>this.user=data);
    setTimeout(() => {
     }, 1000);
}
onUpdateUser(userform){
  let res=this._UsersService.updateuser(userform,this.id);
    res.subscribe((data)=>this.message=data);
}
}
