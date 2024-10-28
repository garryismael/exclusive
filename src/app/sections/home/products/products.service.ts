import { Injectable } from '@angular/core';
import { ProductRepository } from './products.repository';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private repository: ProductRepository) {}

  get products() {
    return this.repository.products;
  }

  get bestProducts() {
    return this.repository.bestProducts;
  }

  get allProducts() {
    return this.repository.allProducts;
  }

  get wishlistProducts() {
    return this.repository.wishlistProducts;
  }

  get suggestedProducts() {
    return this.repository.suggestedProducts;
  }
}
