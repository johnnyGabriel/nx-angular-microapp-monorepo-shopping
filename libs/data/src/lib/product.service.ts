import { Injectable } from '@angular/core';
import { Product } from './product.interface';
import { of } from 'rxjs';
import *  as productsMock  from './product.mock.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: { [key: number]: Product } = {};

  getById(id: number) {

    if (!this.products[id]) {
      this.loadProduct(id);
    }

    return of(this.products[id]);
  }

  private loadProduct(id: number): void {
    this.products[id] = productsMock[id];
  }
  
}
