import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ILoginResponse } from '../shared/commons/interfaces/auth/login-response';
import { IproductItem } from '../shared/commons/interfaces/iproduct-item';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string): Observable<ILoginResponse> {
    const request = { email, password };
    return this.http.post<ILoginResponse>(environment.URL_AUTH_LOGIN,  request).pipe(map(
      (response: ILoginResponse) => {
        return response;
      }
    ));
  }

  logout() {}
  refreshToken() {}

}
