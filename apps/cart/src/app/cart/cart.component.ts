import { Component } from '@angular/core';
import { CartService } from '@microapp-monorepo-shopping/data';

@Component({
  selector: 'microapp-monorepo-shopping-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  
  cart$ = this.cartService.get();
  
  constructor(private cartService: CartService) {}
  
}
