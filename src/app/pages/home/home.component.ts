import { Component, OnInit, Inject } from '@angular/core';
import { IproductItem } from 'src/app/shared/commons/interfaces/iproduct-item';
import { ProductService } from 'src/app/shared/commons/services/product.service';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
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
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: object,
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.productService.get().subscribe(response => {
        this.products = response;
      });
    }
  }

}
