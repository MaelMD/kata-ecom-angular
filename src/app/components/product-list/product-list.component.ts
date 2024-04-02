import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: any[] = [];

  // constructor(private productService: ProductService) {}

  // ngOnInit() {
  //   this.productService.getProducts().subscribe(data => {
  //     this.products = data;
  //   });
  // }
}
