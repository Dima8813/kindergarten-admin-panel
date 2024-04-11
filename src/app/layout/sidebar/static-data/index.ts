import { RouteName } from '@common/enums';
import { RouterItem } from '@common/interfaces';

export const RouterList: RouterItem[] = [
  {
    routerLink: '/',
    routerTitle: 'Dashboard',
  },
  {
    routerLink: RouteName.Users,
    routerTitle: 'Users',
  },
  {
    routerLink: RouteName.Content,
    routerTitle: 'Content',
  },
];
