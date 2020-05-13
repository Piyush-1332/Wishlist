import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../products/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private baseUrl:string;

  constructor(private httpClient:HttpClient) { 
    this.baseUrl=`${environment.baseMwUrl}/api`
  }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}/products`);
  }
  addProduct(product: object): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(product: any, id: string): Observable<Product> {
    return this.httpClient.put<Product>(`${this.baseUrl}/products/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/products/${id}`);
  }

  getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/products/${id}`);
  }
}
