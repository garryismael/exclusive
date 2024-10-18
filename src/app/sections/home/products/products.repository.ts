import { Product } from '@/app/models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  public products: Product[] = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      price: 120, // Updated current price
      previousPrice: 160, // Updated previous price
      image: '/images/gamepad.png', // Placeholder for the image URL
      ratings: 5, // Average rating
      numberOfStars: 88, // Total number of reviews
    },
    {
      name: 'AK-900 Wired Keyboard',
      price: 120, // Updated current price
      previousPrice: 160, // Updated previous price
      image: '/images/keyboard.png', // Placeholder for the image URL
      ratings: 5, // Average rating
      numberOfStars: 88, // Total number of reviews
    },
    {
      name: 'IPS LCD Gaming Monitor',
      price: 120, // Updated current price
      previousPrice: 160, // Updated previous price
      image: '/images/monitor.png', // Placeholder for the image URL
      ratings: 5, // Average rating
      numberOfStars: 88, // Total number of reviews
    },
    {
      name: 'S-Series Comfort Chair',
      price: 120, // Updated current price
      previousPrice: 160, // Updated previous price
      image: '/images/chair.png', // Placeholder for the image URL
      ratings: 5, // Average rating
      numberOfStars: 88, // Total number of reviews
    },
    {
      name: 'S-Series Comfort Chair', // Duplicate entry as provided
      price: 120, // Updated current price
      previousPrice: 160, // Updated previous price
      image: '/images/chair.png', // Placeholder for the image URL
      ratings: 5, // Average rating
      numberOfStars: 88, // Total number of reviews
    },
  ];
}
