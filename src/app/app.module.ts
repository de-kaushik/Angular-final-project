import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortPipe } from './sort.pipe';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AllCoursesComponent,
    CartDetailsComponent,
    CourseDetailsComponent,
    DashboardComponent,
    CartComponent,
    WishlistComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [SortPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
