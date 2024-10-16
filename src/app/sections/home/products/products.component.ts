import { Component } from '@angular/core';
import { ProductComponent } from '../../../components/product/product.component';

@Component({
  selector: 'products-section',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsSection {

}
