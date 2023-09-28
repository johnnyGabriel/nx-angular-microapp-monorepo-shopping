import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from './product.interface';
import { CartItems } from './cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<CartItems>([]);

  constructor(private readonly productService: ProductService) {}

  add(productId: number): void {

    const currentCart = this.cartSubject.getValue();

    if (!currentCart[productId]) {
      this.productService.getById(productId).subscribe(product => {
        this.addNew(product);
        console.log('@cart: adding new product', product);
      });
    } else {
      this.increment(productId);
      console.log('@cart: incrementing product', productId);
    }

  }

  get() {
    return this.cartSubject.asObservable();
  }

  private addNew(product: Product) {

    this.cartSubject.next({
      ...this.cartSubject.getValue(),
      [product.id]: { ...product, qtt: 1 }
    });

  }

  private increment(productId: number) {

    const currentCart = this.cartSubject.getValue();
    const product = currentCart[productId];

    this.cartSubject.next({
      ...currentCart,
      [productId]: {
        ...product,
        ...{ qtt: product.qtt + 1 }
      }
    });

  }
  
}
