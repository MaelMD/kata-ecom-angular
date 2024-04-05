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
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.filteredProducts = this.products;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  
  search(query: string) {
    this.filteredProducts = this.products.filter(product => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });
  }

  filter(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.productService.filterProducts(category).subscribe(data => {
        this.filteredProducts = data;
      });
    }
  }
}
