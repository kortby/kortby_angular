import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
})
export class ToolBarComponent {
  @Input() myDrawer!: MatDrawer;
  constructor() {}

  toggleDrawer() {
    this.myDrawer.toggle();
  }
}
