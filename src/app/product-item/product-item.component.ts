import { Product } from './../core/model/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() p!:Product;
@Output() incrementEvent= new EventEmitter<Product>();
@Output() incrementEventbuy=new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  sendNotif(){
    this.incrementEvent.emit(this.p);

  }
  sendNotifB(){
    this.incrementEventbuy.emit(this.p);

  }
}
