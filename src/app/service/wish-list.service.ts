import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishListService {


  itemList:any=[];

  constructor() { }

  getProduct():any{
    return this.itemList;
  }

  addWishList(item: any){
    console.log(" in service ", item);
  this.itemList.push(item);
  }
}
