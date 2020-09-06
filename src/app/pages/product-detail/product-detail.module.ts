import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { PRODUCT_DETAIL_ROUTES } from './product-detail.routes';
import { NgxGalleryModule } from 'ngx-gallery-9';
import { ButtonIconModule } from 'src/app/shared/components/button-icon/button-icon.module';



@NgModule({
  declarations: [ProductDetailComponent],
  imports: [
    CommonModule,
    PRODUCT_DETAIL_ROUTES,
    NgxGalleryModule,
    ButtonIconModule
  ], exports: [
    ProductDetailComponent
  ]
})
export class ProductDetailModule { }
