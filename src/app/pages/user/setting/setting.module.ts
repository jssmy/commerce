import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingComponent } from './setting.component';
import { SETTING_ROUTES } from './setting.routes';



@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    SETTING_ROUTES
  ], exports: [
    SettingComponent
  ]
})
export class SettingModule { }
