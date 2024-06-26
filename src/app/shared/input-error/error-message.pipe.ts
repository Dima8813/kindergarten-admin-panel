import { inject, Pipe, PipeTransform } from '@angular/core';
import { VALIDATION_ERROR_MESSAGES } from './validation-error-messages.token';

@Pipe({
  name: 'errorMessage',
  standalone: true,
})
export class ErrorMessagePipe implements PipeTransform {
  private errorMessages = inject(VALIDATION_ERROR_MESSAGES);

  transform(key: string, errValue: boolean): string {
    if (!this.errorMessages[key]) {
      console.error(`Missing message for ${key} validator...`);
      return '';
    }

    return this.errorMessages[key](errValue);
  }
}
