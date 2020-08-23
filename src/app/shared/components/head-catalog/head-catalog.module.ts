import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadCatalogComponent } from './head-catalog.component';



@NgModule({
  declarations: [
    HeadCatalogComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    HeadCatalogComponent
  ]
})
export class HeadCatalogModule { }
