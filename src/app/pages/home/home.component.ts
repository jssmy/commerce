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

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.get().subscribe(response => {
      this.products = response;
    });
  }


  
}
