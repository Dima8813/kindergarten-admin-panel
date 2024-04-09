import { Component } from '@angular/core';
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

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    } as LoginControls) as LoginFormGroup;
  }

  onSubmit(): void {}
}
