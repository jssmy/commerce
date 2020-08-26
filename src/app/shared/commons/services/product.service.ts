import { Injectable } from '@angular/core';
import { IproductItem } from '../interfaces/iproduct-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  get(paginate: number): Observable<IproductItem[]>{
    return this.http.get<IproductItem[]>(`${environment.URL_PRODUCT_SERVICE_RECOMMED}/${paginate}`).pipe(
      map((response: IproductItem[])  => {
          return response;
      }));
  }

  find(slug: string): Observable<IproductItem> {
    return this.http.get<IproductItem>(`${environment.URL_PRODUCT_SERVICE_FIND}/${slug}`).pipe(
      map((response: IproductItem) => {
        return response;
      })
    );
  }
}
