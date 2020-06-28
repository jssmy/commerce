import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { LogoComponent } from './logo/logo.component';
import { CartBoxComponent } from './cart-box/cart-box.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    LogoComponent,
    CartBoxComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule
  ], exports: [HeaderComponent]
})
export class HeaderModule { }
