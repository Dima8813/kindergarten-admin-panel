import { Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { RouteName } from '@common/enums';

export const AuthRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: RouteName.Login,
        component: LoginComponent,
        title: 'Login',
      },
      {
        path: RouteName.Registration,
        component: RegistrationComponent,
        title: 'Registration',
      },
    ],
  },
];
