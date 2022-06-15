import { CartItem, Cart } from './../../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  initCartLocalStorage()
  {
    const initialCart = 
    {
      items: [],

    }
    
    const initialCartJson = JSON.stringify(initialCart)
    localStorage.setItem('cart', initialCartJson)
  }


  setCartItem(cartItem : CartItem) : Cart
  {
    const cart : Cart  = JSON.parse(localStorage.getItem('cart'));
    cart.items.push(cartItem);
    const cartJson = JSON.stringify(cart);
    localStorage.setItem('cart', cartJson);
    return cart;
  }
}
