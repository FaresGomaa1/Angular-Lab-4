import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { StaticProductsService } from './../../service/static-products.service';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('selected') selectElement!: any;
  selectedProduct: IProduct | undefined;
  products: IProduct[] = [];
  selectedValue: number = 0;

  constructor(
    private staticProductsService: StaticProductsService,
    private route: ActivatedRoute
  ) {
    this.products = this.staticProductsService.getAllProducts();
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedValue = parseInt(id!, 10);
    this.selectedProduct = this.staticProductsService.getProductById(this.selectedValue);
  }

  getValueOfSelectedOption(): void {
     this.selectedValue = parseInt(this.selectElement.nativeElement.value);
    this.selectedProduct = this.staticProductsService.getProductById(this.selectedValue);
  }
}