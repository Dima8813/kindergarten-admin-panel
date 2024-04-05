import { Routes } from '@angular/router';

import { WrapPagesComponent } from './wrap-pages.component';
import { RouteName } from '@common/enums';

export const WrapPagesRouting: Routes = [
  {
    path: '',
    component: WrapPagesComponent,
    children: [
      {
        path: '',
        title: 'Dashboard',
        loadComponent: () =>
          import('@pages/dashboard/dashboard.component').then(
            m => m.DashboardComponent
          ),
      },
      {
        path: RouteName.Users,
        title: 'Users',
        loadComponent: () =>
          import('@pages/users/users.component').then(m => m.UsersComponent),
      },
      {
        path: RouteName.Content,
        title: 'Content',
        loadComponent: () =>
          import('@pages/content/content.component').then(
            m => m.ContentComponent
          ),
      },
    ],
  },
];
