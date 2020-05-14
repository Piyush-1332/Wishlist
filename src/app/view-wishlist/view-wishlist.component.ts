import { Component, OnInit } from '@angular/core';
import { WishlistModel } from '../model/wishlist-model';
import { WishlistServiceService } from '../services/wishlist-service.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.css']
})
export class ViewWishlistComponent implements OnInit {
  wishList: WishlistModel[];
  userId:string="101";
  dataFound:boolean;
  model:WishlistModel;
  dataNotFound:boolean;
  submitted:boolean;
  constructor(private wishlistService: WishlistServiceService) { }

  ngOnInit(): void {
    this.loadWishlist();
  }
  loadWishlist(){
    this.wishlistService.getWishlist().subscribe((data:WishlistModel[])=>{
      this.wishList=data;
    },(error)=>{
      console.log(error);
    })
  }

  delete(productId:string) {
    console.log(productId)
    this.wishlistService.removeFromWishlist(productId,this.userId).subscribe(() => {
      // alert("item removed from wishlist..")
      this.loadWishlist();
    })
  }
}
