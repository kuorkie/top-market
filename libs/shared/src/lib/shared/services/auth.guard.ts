import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if (userService.isLoggedIn()) return true;
  return inject(Router).navigate(['/login']);
};
