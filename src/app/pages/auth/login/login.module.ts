import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LOGIN_ROUTES } from './login.routes';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlErrorModule } from 'src/app/shared/commons/pipe/control-error/control-error.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    ControlErrorModule,
    LOGIN_ROUTES,
  ], exports: [
    LoginComponent
  ]
})
export class LoginModule { }
