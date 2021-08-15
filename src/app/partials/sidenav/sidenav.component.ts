import { Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { logoutAction } from 'src/app/auth/ngrx/auth.action';
import { AppState } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { isLoggedIn } from 'src/app/auth/ngrx/auth.selector';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  isLoggedIn$!: Observable<boolean>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
  }

  logout() {
    this.store.dispatch(logoutAction());
  }
}
