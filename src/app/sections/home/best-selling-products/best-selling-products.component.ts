import { Component } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { ProductComponent } from '@/app/components/product/product.component';

@Component({
  selector: 'best-selling-products',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './best-selling-products.component.html',
  styleUrl: './best-selling-products.component.css',
})
export class BestSellingProductsComponent {
  constructor(private readonly productsService: ProductsService) {}

  get bestProducts() {
    return this.productsService.bestProducts;
  }
}
