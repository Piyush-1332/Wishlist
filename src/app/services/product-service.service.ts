import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.baseMwUrl}/wishlist`; //http://localhost:7000/wishlist
  }

  addtowishlist(product:Product):Observable<Product>{
    return this.http.post<Product>(this.baseUrl,product); //http://localhost:7000/wishlist/
  }
}
