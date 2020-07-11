import { Injectable } from '@angular/core';
import { IproductItem } from '../interfaces/iproduct-item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IproductResponseItem } from '../interfaces/iproduct-response-item';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  
  get(): Observable<IproductItem[]>{    
    const products: IproductItem[] = [
      {
      categories: [{ category: 'phone' }],
      description: 'Product description',
      images: [{
        image_source: {
          large_src: 'assets/img/man/polo-shirt-1.png',
          small_src: 'assets/img/man/polo-shirt-1.png',
          medium_src: 'assets/img/man/polo-shirt-1.png'
        },
        title: 'default_img',
      }],
      price: 12,
      slug: 'product-en-venta-12',
      title: 'Polos de hombres'
    },
    {
      categories: [{ category: 'phone' }],
      description: 'Product description',
      images: [{
        image_source: {
          large_src: 'assets/img/man/polo-shirt-2.png',
          small_src: 'assets/img/man/polo-shirt-2.png',
          medium_src: 'assets/img/man/polo-shirt-2.png'
        },
        title: 'default_img',
      }],
      price: 12,
      slug: 'product-en-venta-12',
      title: 'Polos de hombres'
    },
    {
      categories: [{ category: 'phone' }],
      description: 'Product description',
      images: [{
        image_source: {
          large_src: 'assets/img/man/polo-shirt-4.png',
          small_src: 'assets/img/man/polo-shirt-4.png',
          medium_src: 'assets/img/man/polo-shirt-4.png'
        },
        title: 'default_img',
      }],
      price: 12,
      slug: 'product-en-venta-12',
      title: 'Polos de hombres'
    },
    {
      categories: [{ category: 'phone' }],
      description: 'Product description',
      images: [{
        image_source: {
          large_src: 'assets/img/man/polo-shirt-5.png',
          small_src: 'assets/img/man/polo-shirt-5.png',
          medium_src: 'assets/img/man/polo-shirt-5.png'
        },
        title: 'default_img',
      }],
      price: 12,
      slug: 'product-en-venta-12',
      title: 'Polos de hombres'
    },
    {
      categories: [{ category: 'phone' }],
      description: 'Product description',
      images: [{
        image_source: {
          large_src: 'assets/img/man/polo-shirt-6.png',
          small_src: 'assets/img/man/polo-shirt-6.png',
          medium_src: 'assets/img/man/polo-shirt-6.png'
        },
        title: 'default_img',
      }],
      price: 12.4,
      slug: 'product-en-venta-12',
      title: 'Polos de hombres'
    },
    {
      categories: [{ category: 'phone' }],
      description: 'Product description',
      images: [{
        image_source: {
          large_src: 'assets/img/man/polo-shirt-13.png',
          small_src: 'assets/img/man/polo-shirt-13.png',
          medium_src: 'assets/img/man/polo-shirt-13.png'
        },
        title: 'default_img',
      }],
      price: 12,
      slug: 'product-en-venta-12',
      title: 'Polos de hombres'
    },
  ];

  return new Observable((x) => x.next(products) );
  
    return this.http.get<IproductResponseItem[]>(environment.URL_PRODUCT_SERVICE).pipe(map(response  => {
      const products: IproductItem[] = response.map((item: IproductResponseItem) => {
        return {
          slug: item.slug,
          title: item.title,
          description: item.description,
          price: item.pricing.price,
          categories: item.categories,
          images: item.images
        };
      });
      return products;
    }));
  }
}
