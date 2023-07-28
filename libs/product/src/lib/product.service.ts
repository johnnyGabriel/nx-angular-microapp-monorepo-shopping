import { Injectable } from '@angular/core';
import { Product } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: { [key: number]: Product } = {};

  getById(id: number) {

    if (!this.products[id]) {
      this.loadProduct(id);
    }

    return this.products[id];
  }

  private loadProduct(id: number): void {
    this.products[id] = {
      id: id,
      name: 'Tenis Nike Air Jordan',
      description: 'Tenis de corrida para uso casual',
      price: 899.99
    };
  }
  
}
