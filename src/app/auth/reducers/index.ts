import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';
import { AuthActions } from '../ngrx/action-types';
import { User } from '../model/user.model';

export interface AuthState {
  user: User | undefined;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

// export const reducers: ActionReducerMap<AuthState> = {};

export const authReducerr = createReducer(
  initialAuthState,
  on(AuthActions.loginAction, (state, action) => {
    return {
      user: action.user,
    };
  }),
  on(AuthActions.logoutAction, (state, action) => {
    return {
      user: undefined,
    };
  })
);
