import { Routes } from '@angular/router';
import { authRoutes } from './auth/auth.routing';
import { authRouteGuard } from './auth/guards';
import { LayoutNavbarComponent } from './shared/components/layout-navbar/layout-navbar.component';
import { dashboardRoutes } from './dashboard/dashboard.routing';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/sign-in",
    pathMatch: "full"
  },
  {
    path: "auth",
    children: authRoutes
  },
  {
    path: "dashboard",
    canActivate: [
      authRouteGuard
    ],
    children: [
      {
        path: "",
        component: LayoutNavbarComponent,
        children: dashboardRoutes
      }
    ]
  }
];
