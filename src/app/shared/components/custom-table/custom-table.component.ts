import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { JsonPipe, NgClass } from '@angular/common';
import { GridColumn } from '@common/interfaces/grid-column.interface';

@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [MatTableModule, MatSortModule, JsonPipe, NgClass],
  templateUrl: './custom-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomTableComponent<T>
  implements OnInit, AfterViewInit, AfterContentInit
{
  @ContentChildren(MatHeaderRowDef)
  public headerRowDefs: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef) public rowDefs: QueryList<MatRowDef<T>>;
  @ViewChild(MatTable, { static: true }) public table: MatTable<T>;
  @ContentChildren(MatColumnDef) public columnDefs: QueryList<MatColumnDef>;

  @Input() public dataSource: MatTableDataSource<T>;
  @Input() public columns: GridColumn[] = [];
  withoutCustomColumns: GridColumn[] = [];

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.withoutCustomColumns = this.columns.filter(
      (item: GridColumn) => !item.customField
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  ngAfterContentInit() {
    this.columnDefs.forEach((columnDef: MatColumnDef) =>
      this.table.addColumnDef(columnDef)
    );
    this.rowDefs.forEach((rowDef: MatRowDef<T>) =>
      this.table.addRowDef(rowDef)
    );
    this.headerRowDefs.forEach((headerRowDef: MatHeaderRowDef) =>
      this.table.addHeaderRowDef(headerRowDef)
    );
  }

  announceSortChange(sortState: Sort): void {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
