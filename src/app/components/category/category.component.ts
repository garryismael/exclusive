import { Category } from '@/app/models/category.model';
import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input({
    required: true,
  })
  category!: Category;
}
