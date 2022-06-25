import { CategoriesService } from './../../services/categories/categories.service';
import { Category } from './../../models/category';
import { Product } from './../../models/product';
import { CartService } from 'src/app/services/cart/cart.service';
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

  wishlistProducts: CartProduct[] = []
  endSub$: Subject<any> = new Subject<void>()

  CategoryId: string

  productList: Product[] = [];
  categoriesList: Category[] = [];
  categoryProduct: Product[] = []
  // cartCount: number = 0;


  error: any = '';

  constructor(private productService: ProductService, private wishlistService: WishlistService, private cartService: CartService, private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {

    this.getWishlist()
    this.loadProduct();
    this.loadCategories();


  }


  getWishlist() {


    this.wishlistService.wishlist$.pipe(takeUntil(this.endSub$)).subscribe((responseCart) => {

      this.wishlistProducts = [];

      responseCart.items.forEach((wishlistItem) => {
        this.productService.getProductById(wishlistItem.productId).subscribe((productItem) => {
          if (wishlistItem.productId == productItem._id) {
            this.wishlistProducts.push({
              product: productItem,
              quantity: wishlistItem.quantity
            })


          }
        })

      })

      console.log(this.wishlistProducts)

    })

  }


  addToCart(product) {
    const cartProduct: CartItem =
    {
      productId: product.product.id,
      quantity: product.quantity
    }

    this.cartService.setCartItem(cartProduct)
  }


  deleteFromWishlist(Product: CartProduct) {

    const item: CartItem = {
      productId: Product.product.id,
      quantity: Product.quantity
    }
    this.wishlistService.addProductToWishlist(item, true);
  }





  private loadProduct(selectedCategories?: string[]) {

    console.log('this is selected ' + selectedCategories)
    this.productService.getproducts(selectedCategories).subscribe((resProducts) => {
      this.productList = resProducts;
      console.log(this.productList + 'all');

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
      // console.log(this.categoriesList);

    });
  }



  categoriesFilter() {
    const selectedCategories = this.categoriesList
      .filter(category => category.checked)
      .map(category => category._id)

    this.loadProduct(selectedCategories)
  }


  categoryFilter(id: string) {

    this.CategoryId = id

    this.loadCategoryProducts(this.CategoryId)


  }







}
