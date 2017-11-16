import { Component } from '@angular/core';
import { Product } from './productModel';

@Component ({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})

export class ProductFormComponent {
  model = new Product(3,'ProductA');
}
