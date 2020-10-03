import { Routes, RouterModule } from '@angular/router';
import { SettingComponent } from './setting.component';

const settingRoutes: Routes = [
  {
    path: '',
    component: SettingComponent,
  }
];

export const SETTING_ROUTES = RouterModule.forChild(settingRoutes);
