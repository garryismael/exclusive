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
}
