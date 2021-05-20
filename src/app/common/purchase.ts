import { Address } from './address';
import { Customer } from './customer';
import { Order } from './order';
import { OrderDetails } from './order-details';

export class Purchase {
  customer: Customer;
  order: Order;
  shippingAddress: Address;
  billingAddress: Address;
  orderDetails: OrderDetails[];
}
