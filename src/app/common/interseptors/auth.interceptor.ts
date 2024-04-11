import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '@environments/environment.development';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string | null = localStorage.getItem(environment.token_name);

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(req);
  }

  return next(req);
};
