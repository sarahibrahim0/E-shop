import { identifierName } from '@angular/compiler';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product/products-service.service';
import { Component, OnInit , Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, Subject , pipe, takeUntil} from 'rxjs';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  
  productDetails : Product
  quantity: number
  endsub$: Subject<any> = new Subject<void>()

  constructor(private productService: ProductService, private actRoute : ActivatedRoute) { }

  ngOnInit(): void {
   
   this.actRoute.params.subscribe((params)=>{
  if(params['productItemid']){
   this._getProducts(params['productItemid']);
  console.log(params['productItemid']);

  }

  
   })
   
  
  }

  private _getProducts(id: string){
    this.productService.getProductById('id').pipe(takeUntil(this.endsub$)).subscribe((product)=>{
      this.productDetails = product;
      console.log('this is details')

    })
  }


ngOnDestroy(): void {
  
    this.endsub$.next()

    this.endsub$.complete()
}


}