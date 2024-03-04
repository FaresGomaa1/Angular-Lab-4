import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { AllProductsComponent } from './home/all-products/all-products.component';
import { EditProductComponent } from './home/edit-product/edit-product.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddProductComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    EditProductComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    NotFoundComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
