import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }

  itemList:any=[];

  ngOnInit(): void {

    this.itemList = this.cartService.getProducts();
    console.log(" car componenet", this.itemList);
  }
  
  checkout(){
    alert(" order placed successfully");
  }

  delete( item: any){

    for(let i =0; i<this.itemList.length;i++){
      if(this.itemList[i].id == item.id){
        this.itemList.splice(i,1);
      }
    }
  }
}
