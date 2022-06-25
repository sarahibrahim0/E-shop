import { CartService } from './../../../services/cart/cart.service';
import { CartProductComponent } from './../../cart/cart-product/cart-product.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logo',
  templateUrl: './navbar-logo.component.html',
  styleUrls: ['./navbar-logo.component.css']
})
export class NavbarLogoComponent implements OnInit {

  cartCount: number = 0;


  constructor( private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart?.items?.length ?? 0;
    })
  }


}
