import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/models/product';
// import { ProductService } from 'src/app/services/product.service';
// import { WishlistService } from 'src/app/services/wishlist.service';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/model/product';
import { WishlistServiceService } from 'src/app/services/wishlist-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';
// import { CartService } from 'src/app/services/cart.service';
// import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[];
  wishlistProductId:any[]=[];
  cartPrductIds:any[]=[];
  constructor(private productService:ProductServiceService,private wishlistService:WishlistServiceService) { }

  ngOnInit(): void {
    if((true)){
      this.loadProductList();
      this.loadWishlist();

    }
   
  }
  loadProductList(){
    this.productService.getProductList().subscribe(
      (data)=>{
        this.productList=data;
      }
    )
  }

    
  
  loadWishlist(){
      this.wishlistService.getWishlist().pipe(    
        map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.productId))
          console.log(productIds)
        return productIds;
      })).subscribe((data:[])=>{
        
        this.wishlistProductId=data;
        console.log(this.wishlistProductId)
      })
  }

}
