import { Injectable } from '@angular/core';
import { IProduct } from '../product';
import { ProductModel } from '../products.model';

@Injectable({
  providedIn: 'root',
})
export class StaticProductsService {
  private products: IProduct[];

  constructor() {
    this.products =  [
      new ProductModel(1, 'Product 1', 10.99, 'image1.jpg', 'Category 1', 100),
      new ProductModel(2, 'Product 2', 20.99, 'image2.jpg', 'Category 2', 150),
      new ProductModel(3, 'Product 3', 30.99, 'image3.jpg', 'Category 1', 120),
      new ProductModel(4, 'Product 4', 15.99, 'image4.jpg', 'Category 2', 80),
      new ProductModel(5, 'Product 5', 25.99, 'image5.jpg', 'Category 3', 200),
      new ProductModel(6, 'Product 6', 35.99, 'image6.jpg', 'Category 1', 90),
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(newProduct: IProduct): void {
    this.products.push(newProduct);
  }

  editProduct(updatedProduct: IProduct): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }
}