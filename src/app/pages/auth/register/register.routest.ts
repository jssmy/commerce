import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';

const RegisterRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  }
];

export const REGISTER_ROUTES = RouterModule.forChild(RegisterRoutes);
