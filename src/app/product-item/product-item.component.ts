import { ConsumerService } from './../services/consumer.service';
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
@Output() delete=new EventEmitter<number>();

  constructor( private consumerp:ConsumerService) { }

  ngOnInit(): void {
  }
  sendNotif(){
    this.incrementEvent.emit(this.p);

  }
  sendNotifB(){
    this.incrementEventbuy.emit(this.p);

  }
 /*Delprod(id:number){
   this.consumerp.deleteProduct(this.p.id).subscribe();
  }*/
  Delprod(){
    this.delete.emit(this.p.id)
  }
 
}
