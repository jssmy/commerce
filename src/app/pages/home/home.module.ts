import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTES } from './home.routes';
import { ProductItemModule } from 'src/app/shared/components/product-item/product-item.module';
import { BannerModule } from 'src/app/shared/components/banner/banner.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';



@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ProductItemModule,
    BannerModule,
    SliderModule,
    HOME_ROUTES
  ], exports: [ HomeComponent ]
})
export class HomeModule { }
  