import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../product';
import { StaticProductsService } from './../../service/static-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private staticProductsService: StaticProductsService,
  ) {}

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
    if (this.productForm.valid) {
      let ID = parseInt(this.productForm.value.id);
      let Price = parseInt(this.productForm.value.price);
      let StockQuantity = parseInt(this.productForm.value.stockQuantity);
      let product: IProduct = {
        id: ID,
        name: this.productForm.value.name,
        price: Price,
        imageUrl: this.productForm.value.imageUrl,
        category: this.productForm.value.category,
        stockQuantity: StockQuantity,
      };

      this.staticProductsService.addProduct(product);
      this.productForm.reset();
      alert('Product added successfully!');
    }
  }
}