import { GridColumn } from '@common/interfaces/grid-column.interface';
import { User } from '../interfaces';
import { Gender, Role } from '@common/enums';

export const userGridColumns: GridColumn[] = [
  {
    field: 'id',
    header: 'ID',
    sortable: true,
  },
  {
    field: 'firstName',
    header: 'First Name',
    width: 30,
    sortable: true,
  },
  {
    field: 'lastName',
    header: 'Last Name',
  },
  {
    field: 'email',
    header: 'Email',
  },
  {
    field: 'phone',
    header: 'Phone',
    customField: true,
  },
];

export const userGridRows: User[] = [
  {
    id: 17,
    firstName: 'Test',
    lastName: 'Test',
    gender: Gender.Male,
    email: 'test@gmail.com',
    phone: '232142342',
    password: '$2b$10$fnAot8xJMmG92FTbtcuvBO22fsJ9sh9RLf5teleGfJRYoou.PPaSq',
    banned: false,
    bannedReason: null,
    createdAt: '2024-04-04T13:13:15.564Z',
    updatedAt: '2024-04-04T13:13:15.564Z',
    roles: [
      {
        id: 4,
        value: Role.User,
        description: 'Child studying in kindergarten',
      },
    ],
  },
  {
    id: 16,
    firstName: 'Dima',
    lastName: 'Kudr',
    gender: Gender.Female,
    email: 'dima@gmail.com',
    phone: '1233211',
    password: '$2b$10$fnAot8xJMmG92FTbtcuvBO22fsJ9sh9RLf5teleGfJRYoou.PPaSq',
    banned: false,
    bannedReason: null,
    createdAt: '2024-04-04T13:13:15.564Z',
    updatedAt: '2024-04-04T13:13:15.564Z',
    roles: [
      {
        id: 2,
        value: Role.Admin,
        description: 'Child studying in kindergarten',
      },
    ],
  },
];
