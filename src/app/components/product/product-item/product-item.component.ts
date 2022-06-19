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


  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.initCartLocalStorage()
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
  
  
  

}
