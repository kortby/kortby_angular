import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// component
import { HomeComponent } from './home.component';
// partial modules
import { TableModule } from '../table/table.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }]),
  ],
})
export class HomeModule {}
