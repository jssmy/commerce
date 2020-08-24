import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingContentComponent } from './loading-content.component';



@NgModule({
  declarations: [LoadingContentComponent],
  imports: [
    CommonModule
  ], exports: [
    LoadingContentComponent
  ]
})
export class LoadingContentModule { }
