import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
const AuthLayoutRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
  }
];

export const AUTH_LAYOUT_ROUTES = RouterModule.forChild(AuthLayoutRoutes);
