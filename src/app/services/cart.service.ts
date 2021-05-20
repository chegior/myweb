import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartItem } from '../common/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  carItems: CartItem[] = [];
  // totalQuantity: Subject<number> = new Subject<number>();
  // totalAmount: Subject<number> = new Subject<number>();
  totalQuantity: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  totalAmount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  AddtoCart(cartItem: CartItem) {
    var existitem: CartItem = null;
    existitem = this.carItems.find((c) => c.id == cartItem.id);
    existitem != null ? existitem.quantity++ : this.carItems.push(cartItem);
    this.computeTotal();
  }

  computeTotal() {
    var totalQuantity: number = 0;
    var totalAmount: number = 0;
    this.carItems.forEach((x) => {
      totalAmount += x.unitPrice * x.quantity;
      totalQuantity += x.quantity;
    });
    this.totalAmount.next(totalAmount);
    this.totalQuantity.next(totalQuantity);
  }

  clearAll() {
    this.carItems = [];
    this.totalQuantity.next(0);
    this.totalAmount.next(0);
  }
}
