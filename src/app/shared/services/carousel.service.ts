import { Injectable, NgZone } from '@angular/core';
import { EmblaCarouselType } from 'embla-carousel-angular';

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  public emblaApi?: EmblaCarouselType;
  public options = { loop: false };
  public dots: number[] = [];
  public currentSlide: number = 0;

  constructor(private ngZone: NgZone) {}

  initialize(emblaApi: EmblaCarouselType) {
    this.emblaApi = emblaApi;
    this.updateDots();
    this.emblaApi.on('select', this.updateCurrentSlide.bind(this));
    this.emblaApi.on('reInit', this.updateDots.bind(this));
  }

  updateDots() {
    const numberOfSlides = this.emblaApi?.scrollSnapList().length || 0;
    this.dots = Array.from({ length: numberOfSlides }, (_, i) => i);
  }

  updateCurrentSlide() {
    this.ngZone.run(() => {
      this.currentSlide = this.emblaApi?.selectedScrollSnap() || 0;
      console.log(this.currentSlide);
    });
  }

  scrollTo(index: number) {
    this.ngZone.runOutsideAngular(() => {
      this.emblaApi?.scrollTo(index);
    });
  }

  scrollNext() {
    this.ngZone.runOutsideAngular(() => {
      this.emblaApi?.scrollNext();
    });
  }

  scrollPrev() {
    this.ngZone.runOutsideAngular(() => {
      this.emblaApi?.scrollPrev();
    });
  }

  get numberOfSlides() {
    return this.dots.length;
  }
}
