import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '@common/services/api.service';
import { Roles } from '@pages/auth/interfaces';

@Injectable()
export class RoleService {
  constructor(private readonly apiService: ApiService) {}

  getAll(): Observable<Roles[]> {
    return this.apiService.get<Roles[]>(`/roles`);
  }
}
