

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router : Router, private http : HttpClient) { }

  getproducts():Observable<any>
  {
    return this.http.get<Product []>('http://localhost:3000/products/get_all_products');

  }
}
