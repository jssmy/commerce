import { Injectable } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ERROR_LOGIN } from "src/app/shared/commons/constants/error-login.constants";

@Injectable()
export class RegisterFormPresenter {
  errorControls = ERROR_LOGIN;
  fullName: FormControl = new FormControl();
  email: FormControl = new FormControl();
  password: FormControl = new FormControl();
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      fullName: this.fullName,
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
    this.fullName.setValidators([
      Validators.required
    ]);
  }

  public userAlreadyExistError(): void {
    this.email.setErrors({ alreadyExist: true });
  }


}
