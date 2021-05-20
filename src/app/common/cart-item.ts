import { Product } from './Product';

export class CartItem {
  id: number;
  name: string;
  descrioption: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.descrioption = product.description;
    this.imageUrl = product.imageUrl;
    this.unitPrice = product.unitPrice;
    this.quantity = 1;
  }
}
