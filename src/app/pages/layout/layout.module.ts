import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';
import { BannerModule } from 'src/app/shared/components/banner/banner.module';
import { FooterModule } from 'src/app/shared/components/footer/footer.module';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    SliderModule,
    MenuModule,
    RouterModule,
    FooterModule
  ], exports: [
    LayoutComponent
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutComponent,
      providers: [
      ],
    };
  }
}
