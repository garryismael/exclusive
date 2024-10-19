import { ProductComponent } from '@/app/components/product/product.component';
import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowLeft, heroArrowRight } from '@ng-icons/heroicons/outline';
import {
  EmblaCarouselDirective,
  EmblaCarouselType,
} from 'embla-carousel-angular';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'flash-sales-products-section',
  standalone: true,
  imports: [NgIconComponent, EmblaCarouselDirective, ProductComponent],
  providers: [provideIcons({ heroArrowRight, heroArrowLeft })],
  templateUrl: './flash-sales-products.component.html',
  styleUrl: './flash-sales-products.component.css',
})
export class FlashSalesProductsComponents {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;

  private emblaApi?: EmblaCarouselType;
  public options = { loop: false };
  public dots: number[] = [];
  public currentSlide: number = 0;

  constructor(
    public productService: ProductsService,
    public ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.emblaApi = this.emblaRef.emblaApi;

    if (this.emblaApi) {
      this.emblaApi.on('select', this.updateCurrentSlide.bind(this));
      this.cdr.detectChanges();
    }
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

  scrollNext() {
    this.ngZone.runOutsideAngular(() => {
      this.emblaRef.scrollNext();
    });
  }

  scrollPrev() {
    this.ngZone.runOutsideAngular(() => {
      this.emblaRef.scrollPrev();
    });
  }

  get numberOfSlides() {
    return this.dots.length;
  }
}
