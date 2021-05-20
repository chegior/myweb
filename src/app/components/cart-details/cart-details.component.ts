import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/common/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  totalAmount: number = 0;
  constructor(private cartService: CartService) {}
  carItems: CartItem[] = [];

  ngOnInit(): void {
    this.carItems = this.cartService.carItems;
    this.cartService.totalAmount.subscribe((res) => {
      this.totalAmount = res;
    });
  }
}
