import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {
    return true;
  } else {
    router.navigate(['/admin/']);
    return false;
  }
};
