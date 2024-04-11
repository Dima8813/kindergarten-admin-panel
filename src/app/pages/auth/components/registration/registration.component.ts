import { Component, DestroyRef, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { InputErrorComponent } from '@shared/input-error/input-error.component';
import { AsyncPipe, NgIf } from '@angular/common';

import { Gender, Role } from '@common/enums';
import { AuthService } from '../../services';
import { StringEnumToArray } from '@shared/pipes';
import { RoleService } from '@common/services/role.service';
import { Observable } from 'rxjs';
import { Roles } from '../../interfaces';
import { UniqueEmailValidator } from '@shared/validators/unique-email.validator';

interface Registration {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly gender: string;
  readonly role: string;
  readonly phone: string;
  readonly password: string;
}
type RegistrationControls = { [key in keyof Registration]: AbstractControl };
type RegistrationFormGroup = FormGroup & {
  value: Registration;
  controls: RegistrationControls;
};

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    InputErrorComponent,
    NgIf,
    StringEnumToArray,
    AsyncPipe,
  ],
  providers: [RoleService],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  roles$: Observable<Roles[]> = this.roleService.getAll();
  destroyRef: DestroyRef = inject(DestroyRef);

  protected readonly Gender = Gender;

  constructor(
    private readonly registrationService: AuthService,
    private readonly roleService: RoleService,
    private readonly uniqueEmailValidator: UniqueEmailValidator
  ) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', {
        validators: [Validators.required],
        asyncValidators: [
          this.uniqueEmailValidator.validate.bind(this.uniqueEmailValidator),
        ],
        updateOn: 'blur',
      }),
      gender: new FormControl(Gender.Male, [Validators.required]),
      role: new FormControl(Role.User),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    } as RegistrationControls) as RegistrationFormGroup;
  }

  onSubmit(): void {
    if (!this.registrationForm.valid) {
      return;
    }

    this.registrationService
      .registration(this.registrationForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe();
  }
}
