import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WishlistModel } from '../model/wishlist-model';

@Injectable({
  providedIn: 'root'
})
export class WishlistServiceService {
  baseUrl:string;
  constructor(private http:HttpClient ) { 
    this.baseUrl=`${environment.baseMwUrl}/wishlist`; //http://localhost:7000/wishlist
  }

  getWishlist():Observable<WishlistModel[]>{
      return this.http.get<WishlistModel[]>(this.baseUrl);
  }

  delete(productId:number):Observable<WishlistModel>{
    return this.http.delete<WishlistModel>(`${this.baseUrl}/${productId}`); //http://localhost:7000/wishlist/2
  }
}
