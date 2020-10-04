import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Auth } from 'src/app/auth/auth.helper';
import { AuthService } from 'src/app/auth/auth.service';
import { RoutesPath } from 'src/app/shared/commons/constants/routes-path.enum';
import { LoginFormPresenter } from './login-form.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginFormPresenter ]
})
export class LoginComponent implements OnInit {

  constructor(
    public presenter: LoginFormPresenter,
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {}

  private isValidForm() {
    return this.presenter.form.valid;
  }

  sendLogin() {
    if (this.isValidForm()) {
      /* send service for auth  */
      this.auth.login(this.presenter.email.value, this.presenter.password.value).subscribe((autorization) => {
          Auth.save(autorization);
          this.router.navigate([RoutesPath.MAIN]);
      }, (error) => {
        if (error.status === 401) {
            this.presenter.setInvalidCredentials();
        }
      });
    }
  }

}
