import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  message: any;
  categories:any;
  subcategories:any;
  products: any;
  
  constructor(private __ProductService:ProductsService,private router:Router) {}
  ngOnInit() {
    this.getcatgories()
    this.onFetchproduct()
  }
  getcatgories(){
    setTimeout(() => {
      // this.categories=this.__ProductService.categories;
      this.subcategories=this.__ProductService.subcategories;
    }, 2000);
  }
  
  onAddproduct(productForm){
    console.log(productForm)
    let res=this.__ProductService.addproduct(productForm);
    res.subscribe((data)=>this.message=data);
    this.onFetchproduct();
    
    
  }
  onFetchproduct(){
    setTimeout(() => {
     let resp=this.__ProductService.fetchproduct();
     resp.subscribe((data)=>this.products=data)
    }, 1000);
 }
 onEdit(product){
     this.router.navigate(["admin/product/edit",product.id]);   
 }
 onDeleteById(product){
   let res=this.__ProductService.deleteproductById(product.id);
   res.subscribe((data)=>this.message=data)
   this.onFetchproduct();
 }
}
