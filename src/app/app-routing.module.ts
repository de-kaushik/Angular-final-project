import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "course/:id", component: CourseDetailsComponent },
  { path: "wishlist", component: WishlistComponent },
  { path: "cart", component: CartComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
