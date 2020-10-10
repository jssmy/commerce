import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/auth/auth.helper';
import { AuthService } from 'src/app/auth/auth.service';
import { GrantType } from 'src/app/shared/commons/constants/grant-type';
import { RoutesPath } from 'src/app/shared/commons/constants/routes-path.enum';
import { SocialProvider } from 'src/app/shared/commons/constants/social-provider';
import { IAuthRequest } from 'src/app/shared/commons/interfaces/auth/login-response';
import { LoginFormPresenter } from './login-form.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginFormPresenter ]
})
export class LoginComponent implements OnInit, OnDestroy {
  authSubscription: Subscription = new Subscription();
  authStateSubscription: Subscription = new Subscription();
  constructor(
    public presenter: LoginFormPresenter,
    private auth: AuthService,
    private authService: SocialAuthService,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.authStateSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loginSocial();
  }

  private isValidForm() {
    return this.presenter.form.valid;
  }

  loginSocial() {
    this.authStateSubscription = this.authService.authState.subscribe((user: SocialUser) => {
      const request: IAuthRequest = {
        grantType: GrantType.accessSocialProvider,
        accessToken: user.authToken,
        idToken: user.idToken,
        provider: user.provider.toLocaleLowerCase(),
        user: {
            id: user.id,
            email: user.email,
            name: user.firstName,
            lastName: user.lastName
        }
      };
      this.login(request);
    });
  }

  private login(request: IAuthRequest) {
   this.authSubscription = this.auth.login(request).subscribe((autorization) => {
      Auth.save(autorization);
      this.router.navigate([RoutesPath.MAIN]);
  }, (error) => {
    if (error.status === 401) {
        this.presenter.setInvalidCredentials();
    }
  });
  }

  sendLogin() {
    if (this.isValidForm()) {
      /* send service for auth  */
      const request: IAuthRequest = {
        grantType: GrantType.password,
        email: this.presenter.email.value,
        password: this.presenter.password.value
      };

      this.login(request);

    }
  }

  async signInWithGoogle() {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  async signInWithFB() {
    await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  async signOut() {
    await this.authService.signOut();
  }

}
