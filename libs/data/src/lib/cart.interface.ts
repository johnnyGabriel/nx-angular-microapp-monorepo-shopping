import { Product } from "./product.interface";

export type CartItem = Product & { qtt: number };

export interface CartItems {
  [productId: number]: CartItem;
}