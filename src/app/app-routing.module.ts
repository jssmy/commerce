import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginGuardService } from './auth/login-guard.service';
import { LayoutComponent } from './pages/layout/layout.component';
import { RoutesPath } from './shared/commons/constants/routes-path.enum';

const routes: Routes = [
  {
    path: RoutesPath.LOGIN,
    canActivate: [LoginGuardService],
    loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule)
  }, {
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: RoutesPath.MAIN,
      loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    },
    {
      path: RoutesPath.USER_SETTING,
      canActivate: [AuthGuardService],
      loadChildren: () => import('./pages/user/setting/setting.module').then(m => m.SettingModule)
    },
    {
      path: `${RoutesPath.PRODUCT_DETAIL}/:slug`,
      loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailModule)
    },
    {
      path: RoutesPath.PRODUCT_RESULTS,
      loadChildren: () => import('./pages/search-result/search-result.module').then(m => m.SearchResultModule)
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
