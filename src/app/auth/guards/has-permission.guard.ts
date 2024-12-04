import type { CanActivateFn } from '@angular/router';

export const hasPermissionGuard: CanActivateFn = (route, state) => {

  return true;
};
