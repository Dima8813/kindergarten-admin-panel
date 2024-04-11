import { Component, OnInit } from '@angular/core';
import { CardComponent } from '@shared/components';
import { UserService } from '@common/services/user.service';
import { User } from '../auth/interfaces';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  providers: [UserService],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private readonly usersService: UserService) {}

  ngOnInit(): void {
    this.usersService.getAll().subscribe((users: User[]): void => {
      this.users = users;
      console.log(this.users);
    });
  }
}
