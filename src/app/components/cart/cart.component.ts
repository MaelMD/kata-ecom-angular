import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cartItems: any[] = [];
  itemByQuantityPrice: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }

  removeFromCart(productId: number) {
    this.cartService.removeItem(productId);
  }

  updateQuantity(item: any) {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
    this.cartService.updateItemQuantity(item.product.id, item.quantity);
    this.calculateTotalPrice();
  }
  
}
