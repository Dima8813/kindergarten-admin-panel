import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@common/services/api.service';
import { CreateUserDto, User } from '../interfaces';

@Injectable()
export class RegistrationService {
  constructor(public readonly apiService: ApiService) {}

  public registration(data: CreateUserDto): Observable<User | string> {
    return this.apiService.post<User>(`/auth/registration`, data);
  }
}
