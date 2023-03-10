import { Product } from './../core/model/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  constructor(private http:HttpClient) {}
    getProducts(){
      return this.http.get<Product[]>('http://localhost:3000/products');
    }
    getProductById(id:number){
      return this.http.get<Product>('http://localhost:3000/products'+'/'+id)
    }

    postProduct(product:Product){
      return this.http.post('http://localhost:3000/products',product);
    }
    deleteProduct(id:number){
      return this.http.delete('http://localhost:3000/products'+'/'+id);
    }
    updateProduit(id:number,prod:Product){
      return this.http.put('http://localhost:3000/products'+'/'+id,prod);
    }
}
