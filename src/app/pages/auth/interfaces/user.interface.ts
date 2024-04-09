import { Gender } from '@common/enums/gender.enum';
import { Role } from '@common/enums';

export interface CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly gender: Gender;
  readonly phone: string;
  readonly role: Role;
  readonly password: string;
}

export interface User {
  readonly id: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly gender: Gender;
  readonly phone: string;
  readonly banned: boolean;
  readonly bannedReason: string;
  readonly role: Role[];
  readonly password: string;
}
