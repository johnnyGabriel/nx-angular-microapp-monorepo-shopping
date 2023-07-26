import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartSubject = new BehaviorSubject<Array<number>>([]);

  add(productId: number): void {
    this.cartSubject.next([
      ...this.cartSubject.getValue(),
      productId
    ]);
  }

  get() {
    return this.cartSubject.asObservable();
  }
  
}
