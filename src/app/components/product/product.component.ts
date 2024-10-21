import { Product, ProductVariant } from '@/app/models/product.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
export class ProductComponent implements OnInit {
  @Input({
    required: true,
  })
  product!: Product;

  @Input()
  reduction: boolean = true;

  selectedVariant: ProductVariant | null = null;

  ngOnInit(): void {
    if (this.product.variants && this.product.variants.length > 1) {
      this.selectedVariant = this.product.variants[0];
    }
  }

  selectVariant(variant: ProductVariant) {
    this.selectedVariant = variant;
  }

  get currentVariant() {
    if (this.product.variants && this.product.variants.length > 1) {
      return this.selectedVariant
        ? this.selectedVariant
        : this.product.variants[0];
    }
    return {
      image: this.product.image,
      color: '', // no colors
      price: this.product.price,
      previousPrice: this.product.previousPrice,
    };
  }

  getVariantStyles(variant: ProductVariant): { [kclass: string]: string } {
    const selected = this.selectedVariant === variant;
    return selected ? { 'background-color': '#000' } : {};
  }

  getInnerStyles(variant: ProductVariant): { [kclass: string]: string } {
    const isWhiteBackground =
      variant.color === '#fff' || variant.color.toLowerCase() === 'white';
    const selected = this.selectedVariant === variant;
    if (!selected) {
      return {
        'background-color': variant.color,
        width: '24px',
        height: '24px',
        border: isWhiteBackground ? '1px solid #ccc' : 'none',
      };
    }
    return {
      width: '20px',
      height: '20px',
      'background-color': variant.color,
      border: isWhiteBackground ? '3px solid #ccc' : '3px solid #fff',
    };
  }
}
