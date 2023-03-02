import { CalculService } from './../services/calcul.service';
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
  alertStock!:number;
  constructor(private service:ProductService,private calculS:CalculService) { }//inject le service das le constructeur

  ngOnInit(): void {
this.listProduct=this.service.listPr//affecter la liste de service dans la liste de produit
this.alertStock= this.calculS.getNumberOf(this.listProduct,'quantity',0)
  }

  buy(product1 : Product){
    let p =this.listProduct.indexOf(product1)
    this.listProduct[p].quantity--;
  }

  //like(l : number){
    like(product : Product){
      let i =this.listProduct.indexOf(product)
    this.listProduct[i].like++;
  }

}
