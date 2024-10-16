import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandApple } from '@ng-icons/font-awesome/brands';
import {
  faSolidArrowRight,
  faSolidChevronRight,
} from '@ng-icons/font-awesome/solid';
import { ProductsSection } from '../../sections/home/products/products.component';
import { ProductComponent } from "../../components/product/product.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, NgIconComponent, ProductsSection, ProductComponent],
  providers: [
    provideIcons({ faBrandApple, faSolidArrowRight, faSolidChevronRight }),
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
