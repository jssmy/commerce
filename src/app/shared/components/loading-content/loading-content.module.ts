import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingContentComponent } from './loading-content.component';
import { LoadigItemComponent } from './loading-item/loading-item.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    LoadingContentComponent,
    LoadigItemComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    LoadingContentComponent
  ]
})
export class LoadingContentModule { }
