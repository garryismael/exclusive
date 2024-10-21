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

  public allProducts: Product[] = [
    {
      name: 'Breed Dry Dog Food',
      price: 100,
      previousPrice: 0,
      image: '/images/products/cesar.png',
      ratings: 3,
      numberOfStars: 35,
    },
    {
      name: 'CANON EOS DSLR Camera',
      price: 360,
      previousPrice: 0,
      image: '/images/products/camera.png',
      ratings: 4,
      numberOfStars: 95,
    },
    {
      name: 'ASUS FHD Gaming Laptop',
      price: 700,
      previousPrice: 0,
      image: '/images/products/laptop.png',
      ratings: 5,
      numberOfStars: 325,
    },
    {
      name: 'Curology Product Set ',
      price: 500,
      previousPrice: 0,
      image: '/images/products/curology.png',
      ratings: 5,
      numberOfStars: 65,
    },
    {
      name: 'Kids Electric Car',
      price: 960,
      previousPrice: 0,
      image: '/images/products/electric-car.png',
      ratings: 5,
      numberOfStars: 65,
      variants: [
        {
          color: "#000",
          image: '/images/products/toyota-black.png',
          previousPrice: 0,
          price: 960
        },
        {
          color: "#28CC85",
          image: "/images/products/toyota-green.png",
          previousPrice: 0,
          price: 960
        },
      ]
    },
    {
      name: 'Jr. Zoom Soccer Cleats',
      price: 1160,
      previousPrice: 0,
      image: '/images/products/boots.png',
      ratings: 5,
      numberOfStars: 35,
      variants: [
        {
          color: "#000",
          image: '/images/products/copa-black.png',
          previousPrice: 0,
          price: 1160
        },
        {
          color: "#fff",
          image: "/images/products/white-green.png",
          previousPrice: 0,
          price: 1160
        },
      ]
    },
    {
      name: 'GP11 Shooter USB Gamepad',
      price: 660,
      previousPrice: 0,
      image: '/images/products/gamepad.png',
      ratings: 5,
      numberOfStars: 55,
      variants: [
        {
          color: "#1A8120",
          image: "/images/gamepad-green.png",
          previousPrice: 0,
          price: 660
        },
      ]
    },
    {
      name: 'Quilted Satin Jacket',
      price: 660,
      previousPrice: 0,
      image: '/images/products/jacket.png',
      ratings: 4.5,
      numberOfStars: 55,
      variants: [
        {
          color: "#000",
          image: "/images/jacket-black.png",
          previousPrice: 0,
          price: 660
        },
      ]
    },
    {
      name: 'Bouclé wool jacquard shirt',
      price: 3900,
      previousPrice: 0,
      image: '/images/products/jacket-green.png',
      ratings: 5,
      numberOfStars: 86,
      variants: [
        {
          color: "#53252B",
          image: '/images/products/jacket-green.png',
          previousPrice: 0,
          price: 3900
        },
      ]
    },
    {
      name: 'GG print cotton jacket',
      price: 3200,
      previousPrice: 0,
      image: '/images/products/bombers.png',
      ratings: 5,
      numberOfStars: 96,
      variants: [
        {
          color: "#fff",
          image: '/images/products/bombers-white.png',
          previousPrice: 0,
          price: 3900
        },
      ]
    },
  ];
}
