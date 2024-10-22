import { ProductComponent } from '@/app/components/product/product.component';
import { BestSellingProductsComponent } from '@/app/sections/home/best-selling-products/best-selling-products.component';
import { CategoriesComponent } from '@/app/sections/home/categories/categories.component';
import { FlashSaleBannerComponent } from '@/app/sections/home/flash-sale-banner/flash-sale-banner.component';
import { FlashSalesProductsComponents } from '@/app/sections/home/flash-sales-products/flash-sales-products.component';
import { HeroProductsCarouselComponent } from '@/app/sections/home/hero-products-carousel/hero-products-carousel.component';
import { NewArrivalComponent } from '@/app/sections/home/new-arrival/new-arrival.component';
import { ProductsSection } from '@/app/sections/home/products/products.component';
import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  faSolidArrowRight,
  faSolidChevronRight,
} from '@ng-icons/font-awesome/solid';

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
    NewArrivalComponent,
  ],
  providers: [provideIcons({ faSolidArrowRight, faSolidChevronRight })],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
