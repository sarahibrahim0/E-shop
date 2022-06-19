import { CartItem } from 'src/app/models/cart';
import { CartProduct } from './../../../models/cart';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product/products-service.service';
import { takeUntil, BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { CartService } from './../../../services/cart/cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit , OnDestroy {

  productCart : CartProduct [] = []
  cartCount = 0;
  endSub$ : Subject<any> = new Subject<void>()


  constructor(private cartService : CartService,private productService: ProductService, private router : Router) { }

  ngOnInit(): void {

    this._getCartDetails()
    console.log(this.productCart)
  }

  ngOnDestroy(): void {
      this.endSub$.next(true)
      this.endSub$.complete()
  }


  private _getCartDetails(){


    this.cartService.cart$.pipe(takeUntil(this.endSub$)).subscribe((responseCart)=>{

      this.productCart = [];
      this.cartCount = responseCart?.items.length ?? 0;

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


    deleteCartItem(CartItem : CartProduct){
    this.cartService.removeCartItem(CartItem.product?.id)
  }

}
