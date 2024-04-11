import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { DropdownMenuComponent } from '@shared/components';
import { AuthService } from '@pages/auth/services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, DropdownMenuComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private title: Title,
    public readonly authService: AuthService
  ) {}

  getPageTitle(): string {
    return this.title.getTitle();
  }
}
