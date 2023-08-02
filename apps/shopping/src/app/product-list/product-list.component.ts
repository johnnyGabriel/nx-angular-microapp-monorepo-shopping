import { Component } from '@angular/core';
import { StoreWindowService } from '../store-window.service';
import { CartService } from '@microapp-monorepo-shopping/data';

@Component({
  selector: 'shopping-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  products$ = this.storeWindow.get();

  constructor(private storeWindow: StoreWindowService, private cartService: CartService) {}
  
  handleAddToCart(productId: number) {
    this.cartService.add(productId);
  }
  
}
