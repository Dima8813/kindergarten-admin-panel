import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { ApiService } from '@common/services/api.service';
import { AuthUser, CreateUserDto, LoginUserDto, User } from '../interfaces';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSig = signal<User | null>(null);
  private readonly TOKEN_NAME = 'token';

  constructor(
    public readonly apiService: ApiService,
    public router: Router
  ) {}

  registration(data: CreateUserDto): Observable<User | string> {
    return this.apiService.post<User>(`/auth/registration`, data);
  }

  login(data: LoginUserDto): Observable<AuthUser> {
    return this.apiService.post<AuthUser>(`/auth/login`, data).pipe(
      tap((data: AuthUser): void => {
        this.setAccessToken(data.token);
        console.log(' --> ', this.userSig());
        this.setUserSig(data.user);
        this.router.navigate(['/']);
      })
    );
  }

  private setAccessToken(accessTokenValue: string): void {
    localStorage.setItem(this.TOKEN_NAME, accessTokenValue);
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_NAME);
  }

  getUserSig(): User | null {
    return this.userSig();
  }

  setUserSig(inputUser: User | null): void {
    this.userSig.update(() => inputUser);
  }
}
