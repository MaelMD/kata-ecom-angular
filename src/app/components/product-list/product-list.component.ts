import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    console.log("hi");
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    });
    console.log(this.products);
  }
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  
}
