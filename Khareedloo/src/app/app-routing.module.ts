import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/admin/panel/panel.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { SubCategoriesComponent } from './components/admin/sub-categories/sub-categories.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersComponent } from './components/admin/users/users.component';
import { VendorsComponent } from './components/admin/vendors/vendors.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashComponent } from './components/admin/dash/dash.component';
import { BannerComponent } from './components/admin/banner/banner.component';
import { AuthGaurd } from './guards/auth-guard';
import { UserDetailComponent } from './components/admin/users/user-detail/user-detail.component';
import { CategoryDetailComponent } from './components/admin/categories/category-detail/category-detail.component';
import { SubCategoryDetailComponent } from './components/admin/sub-categories/sub-category-detail/sub-category-detail.component';



const routes: Routes = [
  {path :'',component:DashboardComponent},
  {path :'account',component:LoginComponent},
  {path:'admin',component:PanelComponent, children:[
  {path : '' ,component:DashComponent},
  {path : 'categories' ,component:CategoriesComponent},
  {path : 'categories/edit/:id' ,component:CategoryDetailComponent},
  {path : 'sub-categories' ,component:SubCategoriesComponent},
  {path : 'sub-categories/edit/:id' ,component:SubCategoryDetailComponent},
  {path : 'products' ,component:ProductsComponent},
  {path : 'users' ,component:UsersComponent},
  {path : 'users/:id' ,component:UserDetailComponent},
  {path : 'vendors' ,component:VendorsComponent},
  {path : 'orders' ,component:OrdersComponent},
  {path : 'banner' ,component:BannerComponent},
  ]},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
