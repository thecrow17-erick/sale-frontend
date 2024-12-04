import { inject } from '@angular/core';
import { Router, type CanActivateFn } from '@angular/router';
import { LocalstorageService } from '../../shared';

export const authRouteGuard: CanActivateFn = (_, state) => {
  const localStorage = inject(LocalstorageService);
  const router = inject(Router);
  const isLogged = localStorage.getItem<Boolean>('isLogged')
  if(!isLogged){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.navigateByUrl('/auth')
    return false;
  }
  const token = localStorage.getItem<string>('token');
  if(!token){
    localStorage.setItem<boolean>('isLogged', false);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.navigateByUrl('/auth');
    return false;
  }
  return true;
};
