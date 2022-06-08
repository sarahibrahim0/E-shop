// import { WishlistService } from './../_services/wishlist.service';
// import { MessengerService } from '../../../_services/messenger.service';
import { Product } from '../../../models/product';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem : Product;

  addedToWishlist : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleAddToCart(productItem : Product){
    // console.log(product)
    // this.messenger.sendmsg(this.productItem)
        // console.log(product)

  }

  handleAddToWishlist(){
  // this.wishlist.addToWishlist(this.productItem._id).subscribe(()=>{
  //   this.addedToWishlist = true;
  // })
  }

  handleRemoveFromWishlist(){
    // this.wishlist.removeFromWishlist(this.productItem._id).subscribe(()=>{
    //   this.addedToWishlist = false;
    // })

}

}
