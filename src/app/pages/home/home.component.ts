import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandApple } from '@ng-icons/font-awesome/brands';
import {
  faSolidArrowRight,
  faSolidChevronRight,
} from '@ng-icons/font-awesome/solid';
import { ProductsSection } from '../../sections/home/products/products.component';
import { ProductComponent } from '../../components/product/product.component';
import { ProductCarouselItemComponent } from '@/app/sections/home/product-carousel-item/product-carousel-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    NgIconComponent,
    ProductsSection,
    ProductComponent,
    ProductCarouselItemComponent,
  ],
  providers: [
    provideIcons({ faBrandApple, faSolidArrowRight, faSolidChevronRight }),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public items = Array.from({ length: 5 });
}
