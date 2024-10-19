import { Category } from '@/app/models/category.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepository {
  public categories: Category[] = [
    {
      name: 'Phones',
      image: '/images/categories/phone.svg',
    },
    {
      name: 'Computers',
      image: '/images/categories/computer.svg',
    },
    {
      name: 'SmartWatch',
      image: '/images/categories/smartwatch.svg',
    },
    {
      name: 'Camera',
      image: '/images/categories/camera.svg',
    },
    {
      name: 'HeadPhones',
      image: '/images/categories/headphone.svg',
    },
    {
      name: 'Gaming',
      image: '/images/categories/gaming.svg',
    },
  ];
}
