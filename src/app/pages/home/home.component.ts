import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  faSolidArrowRight,
  faSolidChevronRight,
} from '@ng-icons/font-awesome/solid';
import { ProductsSection } from '../../sections/home/products/products.component';
import { HeroProductsCarouselComponent } from '@/app/sections/home/hero-products-carousel/hero-products-carousel.component';
import { CategoriesComponent } from '@/app/sections/home/categories/categories.component';
import { BestSellingProductsComponent } from '@/app/sections/home/best-selling-products/best-selling-products.component';
import { FlashSaleBannerComponent } from '@/app/sections/home/flash-sale-banner/flash-sale-banner.component';
import { FlashSalesProductsComponents } from '@/app/sections/home/flash-sales-products/flash-sales-products.component';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIconComponent,
    FlashSalesProductsComponents,
    HeroProductsCarouselComponent,
    CategoriesComponent,
    BestSellingProductsComponent,
    FlashSaleBannerComponent,
    ProductComponent,
    ProductsSection,
  ],
  providers: [provideIcons({ faSolidArrowRight, faSolidChevronRight })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
