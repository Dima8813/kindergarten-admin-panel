import { Component, OnInit } from '@angular/core';
import { CardComponent } from '@shared/components';
import { CustomTableComponent } from '@shared/components/custom-table/custom-table.component';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { User } from './interfaces';
import { GridColumn } from '@common/interfaces/grid-column.interface';
import { GetArrayByKey } from '@shared/pipes';
import { userGridColumns, userGridRows } from './static-data';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent, CustomTableComponent, MatTableModule, GetArrayByKey],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  columns: GridColumn[] = userGridColumns;
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.dataSource.data = userGridRows;
  }
}
