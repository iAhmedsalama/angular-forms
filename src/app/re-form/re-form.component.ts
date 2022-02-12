import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../_modules/IProduct';

@Component({
  selector: 'app-re-form',
  templateUrl: './re-form.component.html',
  styleUrls: ['./re-form.component.css'],
})
export class ReFormComponent implements OnInit {
  //event to send product out to product list
  @Output() getProductData = new EventEmitter<object>();

  constructor() {}

  ngOnInit(): void {}

  Product = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(5),
    ]),
    description: new FormControl(''),
    imgUrl: new FormControl(''),
  });

  get productTitle() {
    return this.Product.get('title') as FormControl;
  }

  get productDescription() {
    return this.Product.get('description') as FormControl;
  }

  get productImage() {
    return this.Product.get('imgUrl') as FormControl;
  }

  sendProduct(Product: any) {
    console.log(Product);
    this.getProductData.emit(this.Product);
  }
}
