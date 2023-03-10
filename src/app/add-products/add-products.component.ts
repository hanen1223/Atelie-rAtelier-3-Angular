import { ConsumerService } from './../services/consumer.service';
import { Product } from './../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
product!:Product
  constructor(private productService:ProductService,private  route:Router,private consumerp:ConsumerService) { }

  ngOnInit(): void {
    this.product=new Product;
  }
  add(){
  //   this.productService.addProduct(this.product);//this.product= produit eli fou9'ha
  //   this.route.navigateByUrl("/products");//redirection vers la page de product 
  this.consumerp.postProduct(this.product).subscribe({
    next:()=>  this.route.navigateByUrl("/products"),
  });

}
}
