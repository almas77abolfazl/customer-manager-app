import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
    canActivate: [authGuard],
    children: [
      {
        path: 'customers',
        loadComponent: () => import('./pages/customers/customers.component').then((m) => m.CustomersComponent),
      },
      {
        path: 'reports',
        loadComponent: () => import('./pages/reports/reports.component').then((m) => m.ReportsComponent),
      },
      {
        path: 'new-service',
        loadComponent: () => import('./pages/new-service/new-service.component').then((m) => m.NewServiceComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/setting/setting.component').then((m) => m.SettingComponent),
      },
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
