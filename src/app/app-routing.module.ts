import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'producto/:lug',
      loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
    }
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
export const APP_ROUTES = RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
});
*/
