import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IAuthRequest, ILoginResponse, ILogoutResponse } from '../shared/commons/interfaces/auth/login-response';
import { Auth } from './auth.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(request: IAuthRequest): Observable<ILoginResponse> {
    const config = {
      password: () => this.getHeaderPasswordGrantType(request),
      access_social_provider: () => this.getHeaderSocialProviderGrantType(request)
    };

    const paramsConfig = {
      password: () => null,
      access_social_provider: () => this.getParamsProviderSocial(request)
    };

    const options = {
      headers: config[request.grantType](),
    };

    return this.http.post<ILoginResponse>(environment.URL_AUTH_LOGIN, paramsConfig[request.grantType](), options ).pipe(map(
      (response: ILoginResponse) => {
        return response;
      }
    ));
  }

  private getHeaderPasswordGrantType(request: IAuthRequest): HttpHeaders {
    return new HttpHeaders()
                  .set('grant_type', request.grantType)
                  .set('email', request.email)
                  .set('password', request.password);
  }

  private getHeaderSocialProviderGrantType(request: IAuthRequest): HttpHeaders {
    return new HttpHeaders()
                  .set('grant_type', request.grantType)
                  .set('access_token', request.accessToken)
                  .set('id_token', request.idToken);
  }

  private getParamsProviderSocial(request: IAuthRequest) {
    return request.user;
  }

  logout(): Observable<ILogoutResponse> {
    const header: HttpHeaders = new HttpHeaders()
                  .set('grant_type', 'logout')
                  .set('refresh_token', Auth.refreshToken());
    const options = {
      headers: header
    };
    return this.http.post<ILogoutResponse>(environment.URL_AUTH_LOGOUT, null, options).pipe(map(
      (response: ILogoutResponse) => {
        return response;
      }
    ));
  }
  refreshToken() {}

}
