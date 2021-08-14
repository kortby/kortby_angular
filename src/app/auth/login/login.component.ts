import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { Router } from '@angular/router';
import { AppState } from '../../reducers';
import { loginAction } from '../ngrx/auth.action';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      email: ['kortby@gmail.com', [Validators.required, Validators.email]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit() {}

  login() {
    const val = this.form.value;
    this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          console.log(user);
          this.store.dispatch(loginAction({ user }));
          this.router.navigateByUrl('home');
        })
      )
      .subscribe(noop, () => alert('login failed here'));
  }
}