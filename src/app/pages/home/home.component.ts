import { Component, OnInit } from '@angular/core';
import { IproductItem } from 'src/app/shared/commons/interfaces/iproduct-item';
import { ProductService } from 'src/app/shared/commons/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: IproductItem[];
  imgs: string[] = [
    'assets/img/slider/1.jpg',
    'assets/img/slider/2.jpg',
    'assets/img/slider/3.jpg',
    'assets/img/slider/4.jpg',
    'assets/img/slider/5.jpg',
  ];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.get().subscribe(response => {
      this.products = response;
    });
  }

}
