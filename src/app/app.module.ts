import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CarouselComponent,
    CartStatusComponent,
    ProductListComponent,
    CartDetailsComponent,
    CheckoutComponent,
    PlaceOrderComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'cart-details', component: CartDetailsComponent },
      { path: 'product-category/:id', component: ProductListComponent },
      { path: 'place-order/:id', component: PlaceOrderComponent },
      { path: 'checkout', component: CheckoutComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
