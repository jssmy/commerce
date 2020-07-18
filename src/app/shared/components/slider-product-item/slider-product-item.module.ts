import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderProductItemComponent } from './slider-product-item.component';
import { ProductItemModule } from '../product-item/product-item.module';



@NgModule({
  declarations: [SliderProductItemComponent],
  imports: [
    CommonModule,
    ProductItemModule
  ], exports: [ 
    SliderProductItemComponent
  ]
})
export class SliderProductItemModule { }
