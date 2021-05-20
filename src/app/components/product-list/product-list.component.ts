import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.route.snapshot.paramMap.has('id')
        ? this.productService
            .getProductsByCategory(+this.route.snapshot.paramMap.get('id'))
            .subscribe((res) => (this.products = res))
        : this.productService
            .getProducts()
            .subscribe((res) => (this.products = res));
    });
  }
  AddToCart(p: Product) {
    const cartItem: CartItem = new CartItem(p);
    this.cartService.AddtoCart(cartItem);
  }
}
