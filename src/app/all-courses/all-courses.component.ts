import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';
import { CourseService } from '../service/course.service';
import { WishListService } from '../service/wish-list.service';
import { SortPipe } from '../sort.pipe';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent implements OnInit {
  @Output() public total = new EventEmitter<number>();

  c:any;
  totalPrice: any;
  addToCart(item: any){
   
    this.cartService.addToCart(item);
    this.totalPrice = this.cartService.totalPrice();
    console.log("  in all cousre",this.totalPrice);
    this.total.emit(Number(this.totalPrice));
  }
  sorting(){
    this.c = this.sortPipe.transform(this.c, "asc", "title");
  }

  addToWishList(item:any){
    console.log(" add function com", item);
     this.wishService.addWishList(item);
  }
  gotoCourse( item: any){
     this.router.navigate(['course',item.id]);
  }

  constructor( private router: Router, private s :CourseService, private cartService:CartService, private wishService: WishListService, private sortPipe: SortPipe) { }

  ngOnInit(): void {    
     this.c =  this.s.getProducts();
     console.log(this.c);
  }
  goToCourse(){
    // this.router.navigate(['course']);
  }

}
