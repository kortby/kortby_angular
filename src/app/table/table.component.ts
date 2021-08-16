import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  ViewChild,
  AfterViewInit,
  OnChanges,
  OnDestroy,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, of as observableOf, Subscription } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { GithubIssue } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() searchVal!: string;

  displayedColumns: string[] = [
    'number',
    'title',
    'created',
    'state',
    'author_association',
  ];
  data: GithubIssue[] = [];
  dataSource = new MatTableDataSource(this.data);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  subscription!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _httpClient: HttpClient,
    private readonly tableService: TableService
  ) {}

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    this.subscription = merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.tableService
            .getRepoIssues(
              this.sort.active,
              this.sort.direction,
              this.paginator.pageIndex
            )
            .pipe(catchError(() => observableOf(null)));
        }),
        map((data) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.total_count;
          return data.items;
        })
      )
      .subscribe((data) => {
        this.data = data;
        this.dataSource.data = this.data;
      });
  }

  ngOnChanges() {
    if (this.searchVal) {
      const filterValue = this.searchVal;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    } else {
      this.dataSource.data = this.data;
    }
  }

  drop(event: CdkDragDrop<GithubIssue[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.dataSource.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        this.dataSource.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.dataSource.data = this.data;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
