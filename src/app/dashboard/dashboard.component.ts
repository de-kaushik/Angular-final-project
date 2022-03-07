import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
   total: any;

  ngOnInit(): void {
    this.total=0;
  }
  doSomething( price:any){
   this.total =  price;
   console.log(" in parent", price);
  }
}
