import { Product } from '@/app/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  public products: Product[] = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      price: 120,
      previousPrice: 160,
      image: '/images/gamepad.png',
      ratings: 5,
      numberOfStars: 88,
    },
    {
      name: 'AK-900 Wired Keyboard',
      price: 120,
      previousPrice: 160,
      image: '/images/keyboard.png',
      ratings: 5,
      numberOfStars: 88,
    },
    {
      name: 'IPS LCD Gaming Monitor',
      price: 120,
      previousPrice: 160,
      image: '/images/monitor.png',
      ratings: 5,
      numberOfStars: 88,
    },
    {
      name: 'S-Series Comfort Chair',
      price: 120,
      previousPrice: 160,
      image: '/images/chair.png',
      ratings: 5,
      numberOfStars: 88,
    },
    {
      name: 'S-Series Comfort Chair',
      price: 120,
      previousPrice: 160,
      image: '/images/chair.png',
      ratings: 5,
      numberOfStars: 88,
    },
  ];

  public bestProducts: Product[] = [
    {
      name: 'The north coat',
      price: 260,
      previousPrice: 360,
      image: '/images/products/coat.png',
      ratings: 5,
      numberOfStars: 65,
    },
    {
      name: 'Gucci duffle bag',
      price: 960,
      previousPrice: 1160,
      image: '/images/products/bag.png',
      ratings: 4.5,
      numberOfStars: 65,
    },
    {
      name: 'RGB liquid CPU Cooler',
      price: 160,
      previousPrice: 170,
      image: '/images/products/cpu-cooler.png',
      ratings: 4.5,
      numberOfStars: 65,
    },
    {
      name: 'Small BookSelf',
      price: 360,
      previousPrice: 360,
      image: '/images/products/bookshelf.png',
      ratings: 5,
      numberOfStars: 65,
    },
  ];
}
