import { identifierName } from '@angular/compiler';
import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product/products-service.service';
import { Component, OnInit , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  
  productDetails : Product
  quantity: number

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
    this.productService.getProductById('id').subscribe((product)=>{
      this.productDetails = product;
      console.log('this is details')

    })
  }





}