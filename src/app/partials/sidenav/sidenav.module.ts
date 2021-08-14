import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
// angular material
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, MatListModule, MatIconModule, MatButtonModule],
  exports: [SidenavComponent],
})
export class SidenavModule {}
