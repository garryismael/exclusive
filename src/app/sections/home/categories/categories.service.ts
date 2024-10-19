import { Injectable } from '@angular/core';
import { CategoryRepository } from './categories.repository';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private repository: CategoryRepository) {}

  get categories() {
    return this.repository.categories;
  }
}
