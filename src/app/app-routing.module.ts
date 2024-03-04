import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './home/add-product/add-product.component';
import { ProductDetailsComponent } from './home/product-details/product-details.component';
import { AllProductsComponent } from './home/all-products/all-products.component';
import { EditProductComponent } from './home/edit-product/edit-product.component';
import { SharedComponent } from './shared/shared.component';
import { LogInComponent } from './log-in/log-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'add-product', component: AddProductComponent },
          { path: 'product-details/:id', component: ProductDetailsComponent },
          { path: 'all-products', component: AllProductsComponent },
          { path: 'edit-product/:id', component: EditProductComponent },
        ]
      }
    ]
  },
  { path: 'Log-In', component: LogInComponent },
  {path: "contact", component: ContactUsComponent},
  { path: '**', component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
