import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    console.log(this.http.get(this.apiUrl));
    
    return this.http.get(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  
  searchProducts(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?title_like=${query}`);
  }
  
  filterProducts(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/category/${category}`);
  }
  
}
