import { CartItem } from 'src/app/models/cart';
import { CartService } from './../../../services/cart/cart.service';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product/products-service.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {


  productDetails: Product
  quantity = 1;
  endsub$: Subject<any> = new Subject<void>()
  id: string 


  constructor(private productService: ProductService, private cartService: CartService, private actRoute: ActivatedRoute) {
    this.cartService.initCartLocalStorage();
  }

  ngOnInit(): void {

    // this.id = this.actRoute.snapshot.params?.['productItem_id'];
    // // this.idB.next(this.id);
    // // this.actRoute.params.subscribe((params) => {
    // //   if (params['productItemid']) {
    // //     const idParams = params['productItemid'];
    // // this.idB.subscribe(id=>{
    // //   this.id = id
    // // })
    // this._getProducts(this.id);
    // console.log(idParams)


    {
      this.actRoute.params.subscribe((params) => {
        if (params['productItem_id']) {
          this._getProducts(params['productItem_id']);
          console.log(this.id)

        }
      });
    }

  }


  ngOnDestroy(): void {
    this.endsub$.next(true)
    this.endsub$.complete()
  }



  private _getProducts(id: string) {

    this.productService.getProductById(id).pipe(takeUntil(this.endsub$)).subscribe((product) => {
      this.productDetails = product;
      // this.idB.next(this.productDetails._id)
      console.log(product + '_getproduct()')  
      console.log(this.productDetails._id) 


    })
  }



  addToCart() {
    const cartProduct: CartItem =
    {
      productId: this.productDetails._id, //id is undefined 
      quantity: this.quantity
    }

    this.cartService.setCartItem(cartProduct)

  }





}