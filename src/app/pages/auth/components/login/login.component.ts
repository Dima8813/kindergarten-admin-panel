import { Component, DestroyRef, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

import { InputErrorComponent } from '@shared/input-error/input-error.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AuthService } from '../../services';

interface Login {
  email: string;
  password: string;
}
type LoginControls = { [key in keyof Login]: AbstractControl };
type LoginFormGroup = FormGroup & { value: Login; controls: LoginControls };

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, InputErrorComponent],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  loginForm: FormGroup;
  destroyRef: DestroyRef = inject(DestroyRef);

  constructor(readonly authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
    } as LoginControls) as LoginFormGroup;
  }

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.authService
      .login(this.loginForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((): void => {
        this.loginForm.reset();
      });
  }
}
