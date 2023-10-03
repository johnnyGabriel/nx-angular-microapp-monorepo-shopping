import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { ProductListModule } from './product-list/product-list.module';
import { DataModule } from '@microapp-monorepo-shopping/data';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    ProductListModule,
    DataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
