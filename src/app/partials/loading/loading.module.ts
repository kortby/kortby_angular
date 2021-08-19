import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading.component';
import { LoadingService } from './loading.service';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  providers: [LoadingService],
  exports: [LoadingComponent],
})
export class LoadingModule {}
