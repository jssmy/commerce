import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IproductItem } from 'src/app/shared/commons/interfaces/iproduct-item';
import { ProductService } from 'src/app/shared/commons/services/product.service';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
  product: IproductItem;
  slug = this.activeRoute.snapshot.paramMap.get('slug');
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.find(this.slug).subscribe(product => {
      this.product = product;
      this.galleryImages = this.product.images.map(item => {
        return {
          big : item.source,
          small: item.source,
          medium: item.source
        };
      });
    });

    this.galleryOptions = [
      {
          width: '90%',
          height: '500px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];
  }

}
