import { ProductService } from './../../../services/product/products-service.service';
import { Product } from '../../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  productList: Product[] = [];
  error: any = '';

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.product.getproducts().subscribe((data) => {
      if (data.status == 'success') {
        this.productList = data.products;
        console.log(this.productList);
      } else {
        this.error = data;
        // console.log(this.productList)
      }
    });
  }
}
