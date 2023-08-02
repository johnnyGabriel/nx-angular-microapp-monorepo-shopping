import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  declarations: [RemoteEntryComponent, CartComponent],
  imports: [CommonModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
