import { IProduct } from 'src/app/product';
import { StaticProductsService } from './../../service/static-products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent {
  products: IProduct[]= []; 
  constructor(private StaticProductsService: StaticProductsService) {
  }
  ngOnChanges(): void {
    this.products = this.StaticProductsService.getAllProducts();
  }
  ngOnInit():void {
    this.products = this.StaticProductsService.getAllProducts();
  }
  deleteProduct(index: number): void {
    this.products.splice(index, 1);
    this.StaticProductsService.deleteProduct(index);
  }
}
