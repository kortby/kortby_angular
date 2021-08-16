import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';

import { HttpClientModule } from '@angular/common/http';
// material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TableService } from './table.service';
import { MyDatePipe } from '../pipes/my-date.pipe';

@NgModule({
  declarations: [TableComponent, MyDatePipe],
  imports: [
    CommonModule,
    DragDropModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatProgressSpinnerModule,
    HttpClientModule,
  ],
  exports: [TableComponent],
  providers: [TableService],
})
export class TableModule {}
