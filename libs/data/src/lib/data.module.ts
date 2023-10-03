import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './cart.service';
import { ProductService } from './product.service';

@NgModule({
  imports: [CommonModule],
  providers: [CartService, ProductService],
  
})
export class DataModule {}
