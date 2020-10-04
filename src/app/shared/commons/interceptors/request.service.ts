import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/auth.helper';
import { ENABLE_ADD_HEADER_TOKEN } from './contants/enable-to-add-header-token.constants';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.isValidToAddTokenHeader(req.url)) {
      return next.handle(req.clone({
        headers: this.getTokenHeader(req)
      }));
    }

    return next.handle(req);
  }

  isValidToAddTokenHeader(url: string): boolean {
    return ENABLE_ADD_HEADER_TOKEN.indexOf(url) !== -1;
  }

  private getTokenHeader(req: HttpRequest<any>): HttpHeaders {
    return req.headers.set('autorization', `Bearer ${Auth.token()}`);
  }

}
