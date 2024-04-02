import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';


const routes: Routes = [
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: '/', redirectTo: '/products', pathMatch: 'full' }
  ];
  

  @NgModule({
  imports: [RouterModule.forRoot(routes ,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
