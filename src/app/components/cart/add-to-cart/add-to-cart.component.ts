import { CartService } from './../../../services/cart/cart.service';
import { Cart, CartItem } from 'src/app/models/cart';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  cart: CartItem[]

  constructor( private cartService : CartService) { }

  ngOnInit(): void {
  this.cartService.cart$.subscribe((cart)=>{
    this.cart = cart.items
  })
  }

}
