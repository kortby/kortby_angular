import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kortby-angular';
  searchString!: string;

  applySearch(str: string) {
    this.searchString = str;
  }
}
