import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
   items:any;
   @Input() total:any=0;


  constructor(private s: CartService) { }

  ngOnInit(): void {
   this.items =this.s.getProducts();
  //  this.totalPrice = this.s.totalPrice();
   console.log(" totoal", this.total);
  }


}
