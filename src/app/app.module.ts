import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsSearchComponent } from './components/product/products-search/products-search.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { AddToCartComponent } from './components/cart/add-to-cart/add-to-cart.component';
import { RelatedProductsComponent } from './components/cart/related-products/related-products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import {BadgeModule} from 'primeng/badge';


@NgModule({
  declarations: [
    AppComponent,
    ProductsSearchComponent,
    ProductsListComponent,
    AddToCartComponent,
    RelatedProductsComponent,
    WishlistComponent,
    CategoriesComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CartItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule , BadgeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
