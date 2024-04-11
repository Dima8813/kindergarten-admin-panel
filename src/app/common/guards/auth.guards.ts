import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { AuthService } from '@pages/auth/services';
import { RouteName } from '../enums';

export function AuthGuard(): CanActivateFn {
  return (): boolean => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    if (authService.isLoggedIn()) {
      return true;
    }

    router.navigate([`/${RouteName.Auth}/${RouteName.Login}`]);
    return false;
  };
}
