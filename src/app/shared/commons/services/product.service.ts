import { Injectable } from '@angular/core';
import { IproductItem } from '../interfaces/iproduct-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Helper } from '../helpers/helper';
import { DateHelper } from '../helpers/date-helper';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  get(paginate: number): Observable<IproductItem[]>{
    return this.http.get<IproductItem[]>(`${environment.environmentProducts.baseUrl}/${environment.environmentProducts.serviceRecommended}/${paginate}`).pipe(
      map((response: IproductItem[])  => {
          return response.map((item: IproductItem) => {
            return this.mapper(item);
          });
      }));
  }

  find(slug: string): Observable<IproductItem> {
    return this.http.get<IproductItem>(`${environment.environmentProducts.baseUrl}/${environment.environmentProducts.serviceFindProduct}/${slug}`).pipe(
      map((response: IproductItem) => {
        return this.mapper(response);
      })
    );
  }

  private mapper(item: IproductItem) {
  item.shortTitle = Helper.shortName(item.title);
  item.createdDateHuman = DateHelper.dateAgoDays(item.created);
  return item;
  }

}
