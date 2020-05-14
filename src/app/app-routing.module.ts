import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductsComponent } from './products/products.component';
import { ViewWishlistComponent } from './view-wishlist/view-wishlist.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'product',component:ProductListComponent},
  {path:'wishlist',component:ViewWishlistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
