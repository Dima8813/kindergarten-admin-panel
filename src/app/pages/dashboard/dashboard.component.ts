import { Component } from '@angular/core';
import { CardComponent } from '@shared/components';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
