import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shopping-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {

  @Input() name?: string;
  @Input() desc?: string;
  @Input() price?: number;

  @Output() add = new EventEmitter();
  
  addedToCart = false;

  handleAddToCart() {
    this.addedToCart = true;
    this.add.emit();
  }

}
