import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

import { ClickOutsideDirective } from '../../directives';

@Component({
  selector: 'app-dropdown-menu',
  standalone: true,
  imports: [NgClass, ClickOutsideDirective],
  templateUrl: './dropdown-menu.component.html',
})
export class DropdownMenuComponent {
  @Input() toggleBtnText: string = 'Action';
  @Input() avatarImg: string;
  @Input() extendClass: string = '';
  @Input() actionItems: string[] = [];
  @Output() eventTableAction: EventEmitter<string> = new EventEmitter<string>();

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
}
