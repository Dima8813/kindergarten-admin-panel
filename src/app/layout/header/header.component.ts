import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private title: Title) {}

  getPageTitle(): string {
    return this.title.getTitle();
  }
}
