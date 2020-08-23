import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResultComponent } from './search-result.component';
import { SEARCH_RESULT_ROUTES } from './search-result.routes';
import { ProductItemModule } from 'src/app/shared/components/product-item/product-item.module';
import { SiderModule } from 'src/app/shared/components/sider/sider.module';
import { HeadCatalogModule } from 'src/app/shared/components/head-catalog/head-catalog.module';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    ProductItemModule,
    SiderModule,
    HeadCatalogModule,
    SEARCH_RESULT_ROUTES
  ], exports: [
    SearchResultComponent
  ]
})
export class SearchResultModule { }
