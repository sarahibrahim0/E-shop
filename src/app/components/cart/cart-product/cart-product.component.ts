import { CartProduct } from './../../../models/cart';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product/products-service.service';
import { takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from './../../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {

  productCart : CartProduct [] = []

  constructor(private cartService : CartService,private productService: ProductService, private router : Router) { }

  ngOnInit(): void {

    this._getCartDetails()
    console.log(this.productCart)
  }


  private _getCartDetails(){
    this.cartService.cart$.pipe().subscribe((responseCart)=>{
      responseCart.items.forEach((cartItem)=>{
        this.productService.getProductById(cartItem.productId).subscribe((productItem)=>{
          this.productCart.push({
            product: productItem,
            quantity: cartItem.quantity
          })
          
        })
      })
    })

  }

}
