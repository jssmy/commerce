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
  paginate = 1;
  loadMoreEnabled = true;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.loadResults();
  }
  async loadResults() {
     this.products = await this.productService.get(this.paginate).toPromise();
  }

  loadMore() {
    if (this.loadMoreEnabled) {
      this.paginate ++;
      this.loadMoreEnabled = false;
      this.productService.get(this.paginate).toPromise().then((response: IproductItem[]) => {
        this.loadMoreEnabled = true;
        this.products = [
          ... this.products,
          ... response
        ];
      });
    }
  }
}

