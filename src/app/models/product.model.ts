export interface ProductVariant {
  image: string;
  color: string;
  price: number;
  previousPrice: string;
}
export interface Product {
  name: string;
  price: number;
  previousPrice: number;
  image: string;
  ratings: number;
  numberOfStars: number;
  variants?: ProductVariant[];
}
