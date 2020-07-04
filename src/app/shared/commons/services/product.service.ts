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
    const products: IproductItem [] = [
      {
        id: '324343434',
        name: 'Harina Blanca Flor Preparada - Bolsa 1Kg',
        price: 12.3,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-13.png'
      },
      {
        id: '324343434',
        name: 'Harina Blanca Flor Preparada - Bolsa 1Kg',
        price: 12.3,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-6.png'
      },
      {
        id: '324343434',
        name: 'Harina Blanca Flor Preparada - Bolsa 1Kg',
        price: 12.3,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-4.png'
      },
      {
        id: '324343434',
        name: 'Harina Blanca Flor Preparada - Bolsa 1Kg',
        price: 12.3,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-4.png'
      },
      {
        id: '324343434',
        name: 'Harina Blanca Flor Preparada - Bolsa 1Kg',
        price: 12.3,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-2.png'
      },
      {
        id: '324343434',
        name: 'Harina Blanca Flor Preparada - Bolsa 1Kg',
        price: 12.3,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-5.png'
      }
    ];
    return new Observable((x) => x.next(products));
    return this.http.get(environment.URL_PRODUCT_SERVICE).pipe(map(response => {
      console.log(response);
      return [];
    }));
  }
}
