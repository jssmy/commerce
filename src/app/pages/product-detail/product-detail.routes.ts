import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail.component';

const ProductDetailComponentRoutes: Routes = [
  {
    path: '',
    component: ProductDetailComponent,
  }
];

export const PRODUCT_DETAIL_ROUTES = RouterModule.forChild(ProductDetailComponentRoutes);
