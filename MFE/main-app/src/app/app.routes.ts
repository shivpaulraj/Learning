import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  { path: 'product-listing', loadChildren: () => loadRemoteModule('productListing', 'ProductListingModule') },
  { path: 'shopping-cart', loadChildren: () => loadRemoteModule('shoppingCart', 'ShoppingCartModule') },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  bootstrap: [AppComponent],
})
export class AppModule { }