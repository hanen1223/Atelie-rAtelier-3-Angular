import { Product } from './../core/model/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  listPr:Product[]=[
    {id: 1, title: "T-shirt 1", price: 18, quantity: 0, like: 0},
    {id: 2, title: "T-shirt 2", price: 21, quantity: 10, like: 0},
    {id: 3, title: "T-shirt 3", price: 16, quantity: 8, like: 0}, 
  ]
  constructor() {
   }
   addProduct(product:Product){
    this.listPr.push(product);
   }
}
