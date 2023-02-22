import { Product } from './../core/model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
product!:Product
  constructor() { }

  ngOnInit(): void {
    this.product=new Product;
  }

}
