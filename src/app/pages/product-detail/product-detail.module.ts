import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { PRODUCT_DETAIL_ROUTES } from './product-detail.routes';



@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    PRODUCT_DETAIL_ROUTES
  ], exports: [
    ProductDetailComponent
  ]
})
export class ProductDetailModule { }
