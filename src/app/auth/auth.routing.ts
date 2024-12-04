import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './page';
import { NgModule } from '@angular/core';

export const authRoutes: Routes = [
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  },
  {
    path: "sign-in",
    component: LoginPageComponent
  }
];
