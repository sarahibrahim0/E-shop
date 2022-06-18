import { CartItem } from 'src/app/models/cart';
import { CartService } from './../../../services/cart/cart.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product/products-service.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {


  productDetails : Product
  quantity = 1;
  endsub$: Subject<any> = new Subject<void>()
  id : string


  constructor(private productService: ProductService, private cartService: CartService, private actRoute: ActivatedRoute) {
    this.cartService.initCartLocalStorage();
  }

  ngOnInit(): void {

    this.id = this.actRoute.snapshot.params?.['productItemid'];

    // this.actRoute.params.subscribe((params) => {
    //   if (params['productItemid']) {
    //     const idParams = params['productItemid'];
        this._getProducts(this.id);
        // console.log(idParams)
        console.log(this.id)

  
  }

  private _getProducts(id: string) {
    this.productService.getProductById('id').subscribe((product) => {
      this.productDetails = product;
      console.log(product + '_getproduct()')  //objects
      console.log(this.productDetails)  //array of products


    })
  }



  addToCart() {
    const cartProduct: CartItem =
    {
      productId: this.productDetails.id, //id is undefined 
      quantity: this.quantity
    }

    this.cartService.setCartItem(cartProduct)

  }



  ngOnDestroy(): void {
    this.endsub$.next(true)
    this.endsub$.complete()
  }


}