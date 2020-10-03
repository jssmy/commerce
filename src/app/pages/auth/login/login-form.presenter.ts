import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ERROR_LOGIN } from 'src/app/shared/commons/constants/error-login.constants';

@Injectable()
export class LoginFormPresenter {
  errorControls = ERROR_LOGIN;
  email: FormControl = new FormControl();
  password: FormControl = new FormControl();
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
    this.initValidators();
  }

  initValidators() {
    this.email.setValidators([
      Validators.email,
      Validators.required
    ]);
    this.password.setValidators([
      Validators.required
    ]);
  }
}

