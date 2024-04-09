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
import { NgIf } from '@angular/common';

import { Gender, Role } from '@common/enums';
import { RegistrationService } from '../../services';
import { RouterList } from '@layout/sidebar/static-data';
import { StringEnumToArray } from '@shared/pipes';

interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  role: string;
  phone: string;
  password: string;
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
  ],
  providers: [RegistrationService],
  templateUrl: './registration.component.html',
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  destroyRef: DestroyRef = inject(DestroyRef);

  protected readonly routerList = RouterList;
  protected readonly Gender = Gender;
  protected readonly Role = Role;

  constructor(private readonly registrationService: RegistrationService) {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', [Validators.required]),
      role: new FormControl(Role.User),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
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
