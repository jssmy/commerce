import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILoginResponse, ILogoutResponse } from '../shared/commons/interfaces/auth/login-response';
import { IproductItem } from '../shared/commons/interfaces/iproduct-item';
import { Auth } from './auth.helper';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<ILoginResponse> {
    const header: HttpHeaders = new HttpHeaders()
                  .set('grant_type', 'password')
                  .set('email', email)
                  .set('password', password);
    const options = {
      headers: header
    };
    return this.http.post<ILoginResponse>(environment.URL_AUTH_LOGIN, null, options ).pipe(map(
      (response: ILoginResponse) => {
        return response;
      }
    ));
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
