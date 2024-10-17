import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-dots.component.html',
  styleUrl: './carousel-dots.component.css',
})
export class CarouselDotsComponent {
  @Input()
  public dotsContainerClass: string = '';

  @Input({
    required: true,
  })
  public currentSlide!: number;

  @Input({
    required: true,
  })
  public numberOfSlides!: number;

  @Input({
    required: true,
  })
  public dots!: Array<number>;

  @Output()
  scrollTo: EventEmitter<number> = new EventEmitter<number>();

  handleClick = (index: number) => {
    this.scrollTo.emit(index);
  };
}
