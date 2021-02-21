import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { REGISTER_ROUTES } from './register.routest';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlErrorModule } from 'src/app/shared/commons/pipe/control-error/control-error.module';
import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    FormsModule,
    ReactiveFormsModule,
    ControlErrorModule,
    REGISTER_ROUTES
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
