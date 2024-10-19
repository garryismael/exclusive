import { ChangeDetectorRef, Component, NgZone, ViewChild } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroArrowRight, heroArrowLeft } from '@ng-icons/heroicons/outline';
import {
  EmblaCarouselDirective,
  EmblaCarouselType,
} from 'embla-carousel-angular';
import { CategoriesService } from './categories.service';
import { CategoryComponent } from '@/app/components/category/category.component';

@Component({
  selector: 'categories-section',
  standalone: true,
  imports: [NgIconComponent, EmblaCarouselDirective, CategoryComponent],
  providers: [provideIcons({ heroArrowRight, heroArrowLeft })],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  @ViewChild(EmblaCarouselDirective) emblaRef!: EmblaCarouselDirective;

  private emblaApi?: EmblaCarouselType;
  public options = { loop: false };
  public currentSlide: number = 0;

  constructor(
    public categoriesService: CategoriesService,
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
}
