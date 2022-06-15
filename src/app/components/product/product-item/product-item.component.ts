import { Product } from './../../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Product

  // AddToCart(){
  //   console.log(this.productItem)
  //   console.log(this.productItem._id)
  //   return this.productItem
  // }

  constructor() { }

  ngOnInit(): void {
    // this.AddToCart()
  }

}
