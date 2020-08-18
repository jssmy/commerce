import { Injectable } from '@angular/core';
import { IproductItem } from '../interfaces/iproduct-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IproductResponseItem } from '../interfaces/iproduct-response-item';
import { CProductItems } from '../constants/product-item.constants';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  get(): Observable<IproductItem[]>{    
    const products: IproductItem[] = CProductItems;

  return new Observable((x) => x.next(products) );
  
    return this.http.get<IproductResponseItem[]>(environment.URL_PRODUCT_SERVICE).pipe(map(response  => {
      const products: IproductItem[] = response.map((item: IproductResponseItem) => {
        return {
          slug: item.slug,
          title: item.title,
          description: item.description,
          price: item.pricing.price,
          categories: item.categories,
          images: item.images,
          store: null
        };
      });
      return products;
    }));
  }

  find(slug: string): Observable<IproductItem> {
    const product: IproductItem = CProductItems.find(item => item.slug === slug);
    return new Observable(x => x.next(product));
  }
}
