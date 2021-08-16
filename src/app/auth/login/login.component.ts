import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators';
import { noop, Subscription } from 'rxjs';
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
  myForm: FormGroup;
  subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.myForm = fb.group({
      email: ['kortby@gmail.com', [Validators.required, Validators.email]],
      password: ['test', [Validators.required]],
    });
  }

  ngOnInit() {}

  get email() {
    return this.myForm.get('email');
  }

  login() {
    const val = this.myForm.value;
    this.subscription = this.auth
      .login(val.email, val.password)
      .pipe(
        tap((user) => {
          this.store.dispatch(loginAction({ user }));
          this.router.navigateByUrl('home');
        })
      )
      .subscribe(noop, () => alert('login failed here'));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
