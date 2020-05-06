import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public product=[]
  public pro={};
  private _url: string = "/assets/products.json";
  success: boolean;
  model: Product;
  constructor(private http: HttpClient,private service:ProductServiceService) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }

  ngOnInit(): void {
    this.getProducts().subscribe(data=>this.product=data);
  }

  addtowishlist(productId:number){
    this.model=this.product.find(x=>x.productId==productId)
    let orb=this.service.addtowishlist(this.model);
    orb.subscribe((data)=>
    {
      this.success=true;
      setTimeout(()=>this.success=false,3000);
    })
  }

}
