import { Component } from '@angular/core';
import { StoreWindowService } from '../store-window.service';

@Component({
  selector: 'shopping-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  products$ = this.storeWindow.get();

  constructor(private storeWindow: StoreWindowService) {}
  
  handleAddToCart(productId: number) {
    console.log(`product ${productId} added to cart`);
  }
  
}
