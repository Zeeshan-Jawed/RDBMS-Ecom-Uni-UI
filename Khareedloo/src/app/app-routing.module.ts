import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { LoginComponent } from './components/admin/login/login.component';
import { PanelComponent } from './components/admin/panel/panel.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { SubCategoriesComponent } from './components/admin/sub-categories/sub-categories.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersComponent } from './components/admin/users/users.component';
import { VendorsComponent } from './components/admin/vendors/vendors.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashComponent } from './components/admin/dash/dash.component';



const routes: Routes = [
  {path :'',component:DashboardComponent},
  {path :'myaccount',component:MyaccountComponent},
  {path : 'login' ,component:LoginComponent},
  {path:'admin',component:PanelComponent, children:[
  {path : '' ,component:DashComponent},
  {path : 'categories' ,component:CategoriesComponent},
  {path : 'sub-categories' ,component:SubCategoriesComponent},
  {path : 'products' ,component:ProductsComponent},
  {path : 'users' ,component:UsersComponent},
  {path : 'vendors' ,component:VendorsComponent},
  {path : 'orders' ,component:OrdersComponent},
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
