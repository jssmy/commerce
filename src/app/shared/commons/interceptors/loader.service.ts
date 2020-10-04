import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of} from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { ENABLE_LOADER } from './contants/enable-loader.constants';

@Injectable({
  providedIn: 'root'
})
export class LoaderService implements HttpInterceptor {

  constructor(
    private spinner: NgxSpinnerService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.enableLoader(req.url)) {
        this.spinner.show();
    }

    return next.handle(req).pipe(finalize(() => {
          this.spinner.hide();
    }));
  }

  private enableLoader(url: string): boolean {
      return ENABLE_LOADER.indexOf(url) !== -1;
  }

}
