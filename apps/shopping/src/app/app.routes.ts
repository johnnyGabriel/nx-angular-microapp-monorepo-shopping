import { Route } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule('cart', './Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: ProductListComponent,
  },
];
