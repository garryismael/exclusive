import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  Input,
  NgZone,
  ViewChild,
} from '@angular/core';
import {
  EmblaCarouselDirective,
  EmblaCarouselType,
} from 'embla-carousel-angular';
import Autoplay from 'embla-carousel-autoplay';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, EmblaCarouselDirective],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;

  @Input()
  useDot: boolean = false;

  @Input()
  dotsContainerClass: string = '';

  private emblaApi?: EmblaCarouselType;
  public options = { loop: false };
  public plugins = [Autoplay()];
  public dots: number[] = [];
  public currentSlide: number = 0;

  constructor(private ngZone: NgZone, private cdr: ChangeDetectorRef) {}

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
      this.emblaRef.scrollTo(index); // Use the directive method
    });
  }

  scrollNext() {
    this.ngZone.runOutsideAngular(() => {
      this.emblaRef.scrollNext(); // Use the directive method
    });
  }

  scrollPrev() {
    this.ngZone.runOutsideAngular(() => {
      this.emblaRef.scrollPrev(); // Use the directive method
    });
  }

  get numberOfSlides() {
    return this.dots.length;
  }
}
