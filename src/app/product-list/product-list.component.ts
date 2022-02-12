import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  Product: {} = {};
  constructor() {}

  ngOnInit(): void {}

  displayProduct(Product: any) {
    this.Product = Product;
  }
}
