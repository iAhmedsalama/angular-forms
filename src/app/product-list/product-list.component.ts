import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  ProductList:object[] = [];
  constructor() {}

  ngOnInit(): void {}

  displayProduct(Product: any) {
    this.ProductList.push(Product);
  }
}
