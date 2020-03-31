import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/admin/login/login.component';
import { MyaccountComponent } from './components/myaccount/myaccount.component';
import { PanelComponent } from './components/admin/panel/panel.component';
import { NavBarComponent } from './components/admin/nav-bar/nav-bar.component';
import { CategoriesComponent } from './components/admin/categories/categories.component';
import { SubCategoriesComponent } from './components/admin/sub-categories/sub-categories.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { UsersComponent } from './components/admin/users/users.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { VendorsComponent } from './components/admin/vendors/vendors.component';
import { CategoriesService } from './services/categories.service';
import { SubCategoriesService } from './services/sub-categories.service';
import { OrdersService } from './services/orders.service';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { VendorsService } from './services/vendors.service';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DashComponent } from './components/admin/dash/dash.component';
import { BannerComponent } from './components/admin/banner/banner.component';
import { BannerService } from './services/banner.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    MyaccountComponent,
    PanelComponent,
    NavBarComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    ProductsComponent,
    UsersComponent,
    OrdersComponent,
    VendorsComponent,
    NotfoundComponent,
    DashComponent,
    BannerComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoriesService,
    SubCategoriesService,
    OrdersService,
    ProductsService,
    UsersService,
    VendorsService,
    BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
