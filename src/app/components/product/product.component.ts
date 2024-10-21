import { Product, ProductVariant } from '@/app/models/product.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroHeart, heroEye } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIconComponent, NgOptimizedImage, CommonModule],
  providers: [provideIcons({ heroHeart, heroEye, heroStarSolid })],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({
    required: true,
  })
  product!: Product;

  @Input()
  reduction: boolean = true;

  selectedIndex: number | null = null;

  selectVariant(index: number) {
    this.selectedIndex = index;
  }

  get variants() {
    if (this.product.variants) {
      return this.product.variants;
    }
    return [];
  }

  getVariantStyles(index: number): { [kclass: string]: string } {
    const selected = this.selectedIndex === index;
    return selected ? { 'background-color': '#000' } : {};
  }

  getInnerStyles(
    variant: ProductVariant,
    index: number
  ): { [kclass: string]: string } {
    const isWhiteBackground =
      variant.color === '#fff' || variant.color.toLowerCase() === 'white';
    if (this.selectedIndex != index) {
      return {
        'background-color': variant.color,
        width: '20px',
        height: '20px',
        border: isWhiteBackground ? '1px solid #ccc' : 'none',
      };
    }
    return {
      width: '16px',
      height: '16px',
      'background-color': variant.color,
      border: isWhiteBackground ? '3px solid #ccc' : '3px solid #fff',
    };
  }
}
