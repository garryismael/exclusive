import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { EmblaCarouselDirective, EmblaCarouselType } from 'embla-carousel-angular';

import { CarouselDotsComponent } from '@/app/components/carousel/carousel-dots/carousel-dots.component';
import { ProductCarouselItemComponent } from '../product-carousel-item/product-carousel-item.component';
import Autoplay from 'embla-carousel-autoplay';

@Component({
  selector: 'app-hero-products-carousel',
  standalone: true,
  imports: [
    EmblaCarouselDirective,
    CarouselDotsComponent,
    ProductCarouselItemComponent,
  ],
  templateUrl: './hero-products-carousel.component.html',
  styleUrl: './hero-products-carousel.component.css',
})
export class HeroProductsCarouselComponent {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;

  private emblaApi?: EmblaCarouselType;
  public options = { loop: false };
  public plugins = [Autoplay()];
  public dots: number[] = [];
  public currentSlide: number = 0;
  public items = Array.from({ length: 5 });

  constructor(
    public ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.emblaApi = this.emblaRef.emblaApi;

    if (this.emblaApi) {
      this.updateDots();
      this.emblaApi.on('select', this.updateCurrentSlide.bind(this));
      this.emblaApi.on('reInit', this.updateDots.bind(this));
      this.cdr.detectChanges();
    }
  }

  updateDots() {
    const numberOfSlides = this.emblaApi?.scrollSnapList().length || 0;
    this.dots = Array.from({ length: numberOfSlides }, (_, i) => i);
  }

  updateCurrentSlide() {
    this.ngZone.run(() => {
      this.currentSlide = this.emblaApi?.selectedScrollSnap() || 0;
    });
  }

  scrollTo(index: number) {
    this.ngZone.runOutsideAngular(() => {
      this.emblaApi?.scrollTo(index);
    });
  }

  get numberOfSlides() {
    return this.dots.length;
  }
}
