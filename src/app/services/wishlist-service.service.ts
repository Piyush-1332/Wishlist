import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WishlistModel } from '../model/wishlist-model';
import { Product } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  // baseUrl: string;
  // retailerId: string = "1";
  // constructor(private http: HttpClient) {
  //   this.baseUrl = `${environment.baseMwUrl}/wishlist`; //http://localhost:7000/wishlist
  // }

  // getWishlist(): Observable<WishlistModel[]> {
  //   return this.http.get<WishlistModel[]>(`${this.baseUrl}/${this.retailerId}`);
  // }

  // removeFromWishlist(productId: string,userId: string): Observable<WishlistModel> {
  //   return this.http.delete<WishlistModel>(`${this.baseUrl}/${productId}/${this.retailerId}`); //http://localhost:7000/wishlist/2
  // }
  // addtowishlist(product: Product): Observable<Product> {
  //   return this.http.post<Product>(this.baseUrl, product); //http://localhost:7000/wishlist/
  // }




  baseUrl: string;
  userId:string="101";
  constructor(private http: HttpClient) {
    this.baseUrl=`${environment.baseMwUrl}/api`
  }

  getWishlist(): Observable<WishlistModel[]> {
    return this.http.get<WishlistModel[]>(`${this.baseUrl}/wishlist/${this.userId}`);
  }

  removeFromWishlist(productId: String,userId:string):any {
    return this.http.delete(`${this.baseUrl}/wishlist/deleteWishlist/${productId}/${userId}`);
  }
  addtowishlist(product: Product): Observable<WishlistModel> {
    let request=new WishlistModel(product.productId,this.userId);
    return this.http.post<WishlistModel>(`${this.baseUrl}/wishlist/addToWishlist`, request); 
  }

  
}
