import { Product } from './../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css']
})
export class DetailProductsComponent implements OnInit {

  id!:number;
  productone!:Product;

  constructor(private route : ActivatedRoute, private productService:ProductService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.productone=this.productService.listPr[this.id-1];//recuperer le produit de cette id
  }

}
