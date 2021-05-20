import { CartItem } from './../../common/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

import { Customer } from 'src/app/common/customer';
import { Address } from 'src/app/common/address';
import { OrderDetails } from 'src/app/common/order-details';
import { Order } from 'src/app/common/order';
import { Purchase } from 'src/app/common/purchase';
import { CheckoutService } from 'src/app/services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  customer: Customer = new Customer();
  shippingAddress: Address = new Address();
  billingAddress: Address = new Address();

  cartItems: CartItem[] = [];
  totalQuantity: number = 0;
  totalAmount: number = 0;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.carItems;
    this.cartService.totalAmount.subscribe((res) => (this.totalAmount = res));
    this.cartService.totalQuantity.subscribe(
      (res) => (this.totalQuantity = res)
    );
  }
  placeOrder() {
    var order: Order = new Order();
    order.totalPrice = this.totalAmount;
    order.totalQuantity = this.totalQuantity;
    var orderDetails: OrderDetails[] = [];

    this.cartItems.forEach((ci) => {
      var od: OrderDetails = new OrderDetails(ci);
      orderDetails.push(od);
    });

    var purchas: Purchase = new Purchase();
    purchas.customer = this.customer;
    purchas.billingAddress = this.billingAddress;
    purchas.shippingAddress = this.shippingAddress;
    purchas.order = order;
    purchas.orderDetails = orderDetails;
    this.checkoutService.placeOrder(purchas).subscribe({
      next: (res) => {
        this.cartService.clearAll();
        this.cartItems = [];
        this.router.navigateByUrl('/place-order/' + res.trackingNumber);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
