import { Product, ProductVariant } from '@/app/models/product.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroEye, heroShoppingCart, heroTrash } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-wishlist-product',
  standalone: true,
  imports: [NgIconComponent, NgOptimizedImage, CommonModule],
  providers: [provideIcons({ heroTrash, heroShoppingCart, heroEye, heroStarSolid })],
  templateUrl: './wishlist-product.component.html',
  styleUrl: './wishlist-product.component.css',
})
export class WishlistProductComponent {
  @Input({
    required: true,
  })
  product!: Product;

  @Input()
  reduction: boolean = true;

  @Input()
  suggestion: boolean = false;
}
