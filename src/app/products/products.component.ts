import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';
import { WishlistServiceService } from '../services/wishlist-service.service';
import { WishlistModel } from '../model/wishlist-model';
import { Product } from '../model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public product = []
  public pro = {};
  private _url: string = "/assets/products.json";
  success: boolean;
  model: Product;
  retailerId: string = "1";
  constructor(private http: HttpClient, private service: WishlistServiceService, private servicepro: ProductServiceService) { }

  ngOnInit(): void {
    this.loadProductList();
  }
  loadProductList() {
    this.servicepro.getProductList().subscribe((data: Product[]) => {
      this.product = data;
    }, (error) => {
      console.log(error);
    })
  }


  addtowishlist(productId: number) {
    this.model = this.product.find(x => x.productId == productId)
    let orb = this.service.addtowishlist(this.model);
    orb.subscribe((data) => {
      this.success = true;
      setTimeout(() => this.success = false, 3000);
    })
  }

}
