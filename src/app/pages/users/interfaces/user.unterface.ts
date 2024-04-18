import { Gender } from '@common/enums';
import { Roles } from '../../auth/interfaces';

export interface User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: Gender;
  readonly email: string;
  readonly phone: string;
  readonly password: string;
  readonly banned: boolean;
  readonly bannedReason: string | null;
  readonly roles: Roles[];
  readonly createdAt: string;
  readonly updatedAt: string;
}
