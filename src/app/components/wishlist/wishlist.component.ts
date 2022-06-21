import { takeUntil, Subject } from 'rxjs';
import { CartProduct } from './../../models/cart';
import { CartItem } from 'src/app/models/cart';
import { ProductService } from './../../services/product/products-service.service';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
 
wishlistProducts : CartProduct [] = []
endSub$: Subject<any> = new Subject<void>()


  constructor(private productService: ProductService, private wishlistService : WishlistService ) {}

  ngOnInit(): void {
  }


   getWishlist() {


    this.wishlistService.wishlist$.pipe(takeUntil(this.endSub$)).subscribe((responseCart) => {

      this.wishlistProducts = [];

      responseCart.items.forEach((wishlistItem) => {
        this.productService.getProductById(wishlistItem.productId).subscribe((productItem) => {
          if(wishlistItem.productId == productItem._id)
          {this.wishlistProducts.push({
            product: productItem,
            quantity: wishlistItem.quantity
          })


       } })

      })

      console.log(this.wishlistProducts)

    })

  }

}
