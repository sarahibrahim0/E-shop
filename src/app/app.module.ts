import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesComponent } from './components/categories/categories/categories.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsSearchComponent } from './components/product/products-search/products-search.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { RelatedProductsComponent } from './components/cart/related-products/related-products.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product/product-item/product-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import {BadgeModule} from 'primeng/badge';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import {RatingModule} from 'primeng/rating';
import { NavbarComponent } from './components/nav/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { NavbarLogoComponent } from './components/nav/navbar-logo/navbar-logo.component';
import { HomeComponent } from './components/home/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsSearchComponent,
    ProductsListComponent,
    RelatedProductsComponent,
    WishlistComponent,
    CategoriesComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    CartItemComponent,
    CartProductComponent,
    NavbarComponent,
    FooterComponent,
    NavbarLogoComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule , BadgeModule, RatingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
