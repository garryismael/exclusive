import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-sale-banner',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './flash-sale-banner.component.html',
  styleUrl: './flash-sale-banner.component.css',
})
export class FlashSaleBannerComponent {}
