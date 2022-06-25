import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CartProductComponent } from './components/cart/cart-product/cart-product.component';
import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/nav/navbar/navbar.component';


const routes: Routes = [
  {path:'products/:productItem_id', component: ProductDetailsComponent},
  {path:'categories/:category_id', component:ProductsListComponent},
  {path:'productslist', component:ProductsListComponent},
  {path:'Wishlist', component:WishlistComponent},


  {path:'Cart', component:CartProductComponent},

  {path:'shop', component: ProductsListComponent},
  {path:'detail', component: ProductDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
