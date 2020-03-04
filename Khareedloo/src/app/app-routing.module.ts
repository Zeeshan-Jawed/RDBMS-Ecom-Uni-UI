import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { LoginComponent } from './components/admin/login/login.component';


const routes: Routes = [
  {path :'',component:DashboardComponent},
  {path :'myaccount',component:MyaccountComponent},
  {path : 'login' ,component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
