import { BehaviorSubject } from 'rxjs';
import { WishlistComponent } from './../../wishlist/wishlist.component';
import { WishlistService } from './../../../services/wishlist/wishlist.service';
import { Product } from './../../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartItem, Cart } from 'src/app/models/cart';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Product

  updateCart: boolean = false



  constructor(private cartService : CartService , private wishlistService : WishlistService) { }

  ngOnInit(): void {
    this.cartService.initCartLocalStorage();
    this.wishlistService.initWishlistLocalStorage();
    // this.getUpdateStatus()


  }





   addProductToCart()
   {
    const cartItem : CartItem = 
  
    {
      productId :  this.productItem._id,
      quantity : 1
    }
  
    return this.cartService.setCartItem(cartItem)
  }
  
  addToWishlist(){

    if(this.updateCart){
      this.updateCart = false
    }else
    {this.updateCart = true}


    // this.addUpdateStatus()
    const cartItem : CartItem = 
  
    {
      productId :  this.productItem._id,
      quantity : 1
    }
    return this.wishlistService.addProductToWishlist(cartItem , this.updateCart );
  }
  
  
addUpdateStatus(){

  const updated : string = JSON.stringify(this.updateCart)
  localStorage.setItem('update' , updated)

}

getUpdateStatus(){
  const updated : string = localStorage.getItem('update')
  this.updateCart  = JSON.parse(updated);
}
}
