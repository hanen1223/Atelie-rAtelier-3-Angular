import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../core/model/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:String = "welcome";
  listProduct!:Product[];
  constructor(private service:ProductService) { }//inject le service das le constructeur

  ngOnInit(): void {
this.listProduct=this.service.listPr//affecter la liste de service dans la liste de produit
  }

  buy(p : number){
    this.listProduct[p].quantity--;
  }

  like(l : number){
    this.listProduct[l].like++;
  }

}
