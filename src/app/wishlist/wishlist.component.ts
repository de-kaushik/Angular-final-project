import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';
import { WishListService } from '../service/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  itemList:any;

  constructor(private wishService: WishListService,  private cartService:CartService) {}

  ngOnInit(): void {


    this.itemList= this.wishService.getProduct();
    console.log(" in wish list", this.itemList);

  }
  addToCart(item: any){
    // event.cancelBubble = true;
    // if(event.stopPropagation) event.stopPropagation();
   // this.router.navigate(['cart']);
    this.cartService.addToCart(item);
    this.deleteCart(item);

  }

  deleteCart( item: any){

    for(let i =0; i<this.itemList.length;i++){
      if(this.itemList[i].id == item.id){
        this.itemList.splice(i,1);
      }

    }
  }
 

}
