import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [ ProductItemComponent ]
})
export class ProductItemModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ProductItemModule,
      providers: [],
    };
  }
}
