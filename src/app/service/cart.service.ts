import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any=[];
  public productItemList= new BehaviorSubject<any>([]);

  addToCart(item: any){
    this.cartItemList.push(item);
    console.log("item ", this.cartItemList);
    this.totalPrice();
  }

  getProducts(): any{
    console.log(" get csrt ", this.cartItemList)
    return this.cartItemList;
  }

  totalPrice(){
    let sum :number=0;


    for(let i =0;i<this.cartItemList.length;i++){
       sum = sum + Number(this.cartItemList[i].actual_price);
    }
    return sum;
    // if(this.cartItemList.length>0){
    // return this.cartItemList.reduce((s: any,item: { actual_price: any; })=> s += item.actual_price);
    // }
    // return 0;
  }


  constructor() { }
}
