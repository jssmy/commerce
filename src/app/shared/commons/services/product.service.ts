import { Injectable } from '@angular/core';
import { IproductItem } from '../interfaces/iproduct-item';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  
  get(): IproductItem[] {
    const products: IproductItem[] = [
      {
        id: '32343434',
        name: 'Camisas',
        price: 12,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-1.png'
      },
      {
        id: '323434232334',
        name: 'Camisas',
        price: 12,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-2.png'
      },
      {
        id: '32343234234434',
        name: 'Camisas',
        price: 12,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-4.png'
      },
      {
        id: '32343242343434',
        name: 'Camisas',
        price: 12,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-13.png'
      },
      {
        id: '3234323423434',
        name: 'Camisas',
        price: 12,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-2.png'
      },
      {
        id: '32342344233434',
        name: 'Camisas',
        price: 12,
        price_before: 0,
        url_img: 'assets/img/man/polo-shirt-5.png'
      }
    ];
    return products;
  }
}
