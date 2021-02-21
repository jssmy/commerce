import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { Auth } from 'src/app/auth/auth.helper';
import { AuthService } from 'src/app/auth/auth.service';
import { GrantType } from 'src/app/shared/commons/constants/grant-type';
import { RoutesPath } from 'src/app/shared/commons/constants/routes-path.enum';
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
    //
  }

  private isValidForm() {
    return this.presenter.form.valid;
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

  private getRequesLoginSocial(user: SocialUser): IAuthRequest {
    const request: IAuthRequest = {
      grantType: GrantType.accessSocialProvider,
      accessToken: user.authToken,
      idToken: user.idToken,
      user: {
          email: user.email,
          name: user.firstName,
          lastName: user.lastName,
          accounInformation: {
            coverImage: null,
            profileImage: user.photoUrl,
            provider: user.provider.toLocaleLowerCase(),
            id: user.id,
          }
      }
    };
    return  request;
  }

  async signInWithGoogle() {
    const social: SocialUser = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.login(this.getRequesLoginSocial(social));
  }

  async signInWithFB() {
   const social: SocialUser = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
   this.login(this.getRequesLoginSocial(social));
  }

  async signOut() {
    await this.authService.signOut();
  }

}
