import { StaticProductsService } from './../../service/static-products.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, private StaticProductsService: StaticProductsService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [null, Validators.required],
      name: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required],
      category: ['', Validators.required],
      stockQuantity: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit() {
    // let ID = parseInt(this.);
    let product :IProduct = {

    }
    if (this.productForm.valid) {
      const newProduct: IProduct = this.productForm.value;
      this.StaticProductsService.addProduct(newProduct);
    }
  }
}