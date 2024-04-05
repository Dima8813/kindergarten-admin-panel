import { Routes } from '@angular/router';
import { RouteName } from '@common/enums';

export const routes: Routes = [
  {
    path: RouteName.Auth,
    loadChildren: () =>
      import('@pages/auth/auth.routing').then(c => c.AuthRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('@pages/wrap-pages/wrap-pages.routing').then(
        c => c.WrapPagesRouting
      ),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
