import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandApple } from '@ng-icons/font-awesome/brands';
import {
  faSolidArrowRight,
  faSolidChevronRight,
} from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-product-carousel-item',
  standalone: true,
  imports: [NgOptimizedImage, NgIconComponent],
  providers: [
    provideIcons({ faBrandApple, faSolidArrowRight, faSolidChevronRight }),
  ],
  templateUrl: './product-carousel-item.component.html',
  styleUrl: './product-carousel-item.component.css',
})
export class ProductCarouselItemComponent {}
