import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessagePipe } from './error-message.pipe';

@Component({
  selector: 'app-input-error',
  standalone: true,
  imports: [CommonModule, ErrorMessagePipe],
  templateUrl: './input-error.component.html',
})
export class InputErrorComponent {
  @Input() errors: { [key: string]: boolean } | null = null;
}
