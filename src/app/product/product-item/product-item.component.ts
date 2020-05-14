import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  @Input() addedToWishlist: boolean;
  @Input() addedToCart: boolean;
  constructor(private wishlistService:WishlistServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  

  handleAddToWishlist() {
    this.wishlistService.addtowishlist(this.productItem).subscribe(() => {
      // alert("item added to wishlist..")
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.productId,'101').subscribe(() => {
      // alert("item removed from wishlist..")
      this.addedToWishlist = false;
    })
  }

}
