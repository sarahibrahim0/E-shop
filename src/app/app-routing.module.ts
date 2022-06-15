import { ProductsListComponent } from './components/product/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'products/:productItemid', component: ProductDetailsComponent},
  {path:'list', component: ProductsListComponent},
  {path:'detail', component: ProductDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
