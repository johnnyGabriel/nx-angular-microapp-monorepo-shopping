import { Injectable } from '@angular/core';
import { ProductService } from '@microapp-monorepo-shopping/data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreWindowService {

  constructor(private productService: ProductService) {}

  get() {
    const productList = new Array(10).fill(null);
    return of(productList.map((_, i) => this.productService.getById(i)));
  }
  
}
