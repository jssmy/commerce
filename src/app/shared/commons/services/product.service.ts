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
  
  get(): Observable<IproductItem[]>{
    console.log('--------');
    return this.http.get(environment.URL_PRODUCT_SERVICE).pipe(map(response => {
      console.log(response);
      return [];
    }));
  }
}
