import {
  Component,
  EventEmitter,
  input,
  Input,
  InputSignal,
  Output,
} from '@angular/core';
import { NgClass } from '@angular/common';

import { ClickOutsideDirective } from '../../directives';
import { Roles, User } from '@pages/auth/interfaces';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [NgClass, ClickOutsideDirective],
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent {
  @Input() toggleBtnText: string = 'Action';
  @Input() extendClass: string = '';
  @Input() actionItems: string[] = [];
  @Output() eventTableAction: EventEmitter<string> = new EventEmitter<string>();

  user: InputSignal<User | null> = input.required<User | null>();

  isMenuOpened: boolean = false;

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }

  clickedOutside(): void {
    this.isMenuOpened = false;
  }

  handleActionClick(item: string): void {
    this.eventTableAction.emit(item);
  }

  getRoles(): string {
    return (
      this.user()
        ?.roles.flatMap((item: Roles) => item?.value)
        .join(', ') || ''
    );
  }
}
