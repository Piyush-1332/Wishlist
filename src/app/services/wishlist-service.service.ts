import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WishlistModel } from '../model/wishlist-model';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  baseUrl: string;
  userId:string="101";
  constructor(private http: HttpClient) {
    this.baseUrl=`${environment.baseMwUrl}/api`
  }

  getWishlist(): Observable<WishlistModel[]> {
    return this.http.get<WishlistModel[]>(`${this.baseUrl}/wishlist/${this.userId}`); //get userId from session when integrated
  }

  removeFromWishlist(productId: String,userId:string):any {
    return this.http.delete(`${this.baseUrl}/wishlist/deleteWishlist/${productId}/${userId}`);  
  }
  addtowishlist(product: Product): Observable<WishlistModel> {
    let request=new WishlistModel(product.productId,this.userId);                            //get userId from session when integrated
    return this.http.post<WishlistModel>(`${this.baseUrl}/wishlist/addToWishlist`, request); 
  }

  
}
