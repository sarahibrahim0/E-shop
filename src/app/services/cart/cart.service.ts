import { CartItem, Cart } from 'src/app/models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  initCartLocalStorage() {
 
    const cartString : string = localStorage.getItem('cart');
    const cart : Cart = JSON.parse(cartString);
    
    if(!cart){
    const initialCart =
    {
      items: [],

    }
    const initialCartJson = JSON.stringify(initialCart)
    localStorage.setItem('cart', initialCartJson)
  }


  }



  setCartItem(cartItem: CartItem, ): Cart {
    const cartString = localStorage.getItem('cart');
    const cart: Cart = JSON.parse(cartString);

    const cartItemExist = cart.items.find((item) => item.productId === cartItem.productId);
    if (cartItemExist) 
    {
      cart.items.map((item) => {
        item.quantity = cartItem.quantity + item.quantity
          return item;
        
      });
    } else {
      cart.items.push(cartItem);
    }

    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
    return cart;
  }



}
