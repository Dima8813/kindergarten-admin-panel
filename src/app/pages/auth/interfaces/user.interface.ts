import { Gender } from '@common/enums/gender.enum';
import { Role } from '@common/enums';

export interface CreateUserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly gender: Gender;
  readonly phone: string;
  readonly roles: Role;
  readonly password: string;
}

export interface LoginUserDto {
  readonly email: string;
  readonly password: string;
}

export interface Roles {
  readonly id: number;
  readonly value: Role;
  readonly description: string;
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
  readonly roles: Roles[];
  readonly password: string;
}

export interface AuthUser {
  readonly user: User;
  readonly token: string;
}
