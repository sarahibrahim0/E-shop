import { CategoriesService } from './../../../services/categories/categories.service';
import { ProductService } from './../../../services/product/products-service.service';
import { Product } from '../../../models/product';
import { Category } from '../../../models/category';

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  @Input() id: ''


  productList: Product[] = [];
  categoriesList: Category[] = [];
  categoryProduct: Product[] = []

  error: any = '';
  CategoryId: string



  constructor(private productService: ProductService, private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.loadProduct();
    this.loadCategories();
    // this.categoriesFilter();

  }



  private loadProduct(selectedCategories?: string[]) {

    console.log('this is selected ' + selectedCategories)
    this.productService.getproducts(selectedCategories).subscribe((resProducts) => {
      this.productList = resProducts;
      console.log(this.productList);

    });
  }

  private loadCategoryProducts(CategoryId?: string) {

    // console.log('this is selected ' +CategoryId)
    this.productService.getSingleCategoryproducts(CategoryId).subscribe((resProducts) => {
      this.productList = resProducts;
      console.log(this.productList + 'hello');

    });
  }

  private loadCategories() {
    this.categoriesService.getCategories().subscribe((resCategories) => {
      this.categoriesList = resCategories;
      console.log(this.categoriesList);

    });
  }



  categoriesFilter() {
    const selectedCategories = this.categoriesList
      .filter(category => category.checked)
      .map(category => category._id)

    this.loadProduct(selectedCategories)


  }

  categoryFilter(id : string) {

    this.CategoryId = id

    this.loadCategoryProducts(this.CategoryId)


  }


}



