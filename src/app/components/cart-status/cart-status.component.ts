import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html',
  styleUrls: ['./cart-status.component.css'],
})
export class CartStatusComponent implements OnInit {
  totalAmount: number = 0;
  totalQuantity: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.totalAmount.subscribe((val) => (this.totalAmount = val));
    this.cartService.totalQuantity.subscribe(
      (val) => (this.totalQuantity = val)
    );
  }
}
