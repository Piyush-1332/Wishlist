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
  dataFound:boolean;
  model:WishlistModel;
  dataNotFound:boolean;
  submitted:boolean;
  constructor(private service: WishlistServiceService) { }

  ngOnInit(): void {

    this.loadWishlist();

  }

  loadWishlist() {
    this.service.getWishlist().subscribe(
      (data) => { this.wishList = data; }
    );
  }

  delete(productId) {
    this.submitted = true;
    this.service.delete(productId).subscribe(
      (data) => {
        this.dataFound = true;
        console.log('hello')
        // this.model = data;
        console.log(this.model);
        this.loadWishlist();
      },
      (err) => {
        this.dataNotFound = true;
        this.dataFound = false;
        setTimeout(() => this.dataNotFound = false, 3000);
      }
    )
  
  }


}
