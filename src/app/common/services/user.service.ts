import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@common/services/api.service';
import { User } from '@pages/auth/interfaces';

@Injectable()
export class UserService {
  constructor(private readonly apiService: ApiService) {}

  getAll(): Observable<User[]> {
    return this.apiService.get<User[]>(`/users`);
  }
}
