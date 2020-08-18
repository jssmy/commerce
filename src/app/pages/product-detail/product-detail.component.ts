import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IproductItem } from 'src/app/shared/commons/interfaces/iproduct-item';
import { ProductService } from 'src/app/shared/commons/services/product.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: IproductItem;
  slug = this.activeRoute.snapshot.paramMap.get('slug');
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.find(this.slug).subscribe(product => {
      this.product = product;
    });
  }

}
