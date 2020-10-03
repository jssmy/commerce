import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { HeaderBottomComponent } from './header-bottom/header-bottom.component';
import { LogoComponent } from './logo/logo.component';
import { CartBoxComponent } from './cart-box/cart-box.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { InputModule } from '../input/input.module';
import { RouterModule } from '@angular/router';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    HeaderComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    LogoComponent,
    CartBoxComponent,
    // SearchInputComponent,
  ],
  imports: [
    CommonModule,
    InputModule,
    RouterModule
  ], exports: [HeaderComponent]
})
export class HeaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HeaderModule,
      providers: [],
    };
  }
}

