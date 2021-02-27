import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { RegisterFormPresenter } from './register-form.presenter';
import { IAuthRegisterRequest } from './../../../shared/commons/interfaces/auth/iauth-register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ RegisterFormPresenter ]
})
export class RegisterComponent implements OnInit {

  constructor(
    public presenter: RegisterFormPresenter,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async register() {
    if(this.presenter.form.valid)  {
        const request: IAuthRegisterRequest = {
          email: this.presenter.email.value,
          password: this.presenter.password.value,
          fullName: this.presenter.fullName.value
        };
        try {
          await this.authService.register(request).toPromise()
        } catch(err){
            if(err.status=== 409) {
              this.presenter.userAlreadyExistError();
            }
        }

    }

  }

}
