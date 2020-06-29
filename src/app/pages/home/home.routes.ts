import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const HomeComponentRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

export const HOME_ROUTES = RouterModule.forChild(HomeComponentRoutes);
