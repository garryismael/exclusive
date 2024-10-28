import { WishlistProductComponent } from '@/app/components/wishlist-product/wishlist-product.component';
import { ProductsService } from '@/app/sections/home/products/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [WishlistProductComponent],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  constructor(public readonly productsService: ProductsService) {}
}
