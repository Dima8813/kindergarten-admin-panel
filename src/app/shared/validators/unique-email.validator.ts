import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { ApiService } from '@common/services/api.service';
import { catchError, map, Observable, of, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniqueEmailValidator implements AsyncValidator {
  constructor(public readonly apiService: ApiService) {}

  validate(
    control: AbstractControl<string | null>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.apiService.get<unknown[]>(`/users?email=${control.value}`).pipe(
      map((users: unknown[]) => {
        return users.length === 0 ? null : { uniqueEmail: { isTaken: true } };
      }),
      catchError(() => of({ uniqueEmail: { isTaken: true } })),
      take(1)
    );
  }
}
