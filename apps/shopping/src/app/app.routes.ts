import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ProductListComponent,
  },
];
