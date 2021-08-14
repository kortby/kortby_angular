import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// component
import { ToolBarComponent } from './tool-bar.component';

@NgModule({
  declarations: [ToolBarComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
  exports: [ToolBarComponent],
})
export class ToolBarModule {}
