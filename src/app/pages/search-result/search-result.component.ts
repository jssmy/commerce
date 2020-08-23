import { Component, OnInit } from '@angular/core';
import { IproductItem } from 'src/app/shared/commons/interfaces/iproduct-item';
import { ProductService } from 'src/app/shared/commons/services/product.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {
  products: IproductItem[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadResults();
  }
  public async loadResults() {
     this.products = await this.productService.get().toPromise();
  }

}
