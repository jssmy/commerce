import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { ButtonIconModule } from '../button-icon/button-icon.module';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [CategoriesComponent],
  imports: [
    CommonModule,
    ButtonIconModule
  ], exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
