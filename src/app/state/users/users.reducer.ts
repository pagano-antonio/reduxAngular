// users.reducer.ts
/*
import { createReducer, on } from '@ngrx/store';
import * as UsersActions from './users.actions';

export interface UsersState {
  list: any[];
  loading: boolean;
  error?: string | null;
}

export const initialState: UsersState = {
  list: [],
  loading: false,
  error: null,
};

export const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers, state => ({ ...state, loading: true, error: null })),
  on(UsersActions.loadUsersSuccess, (state, { users }) => ({ ...state, list: users, loading: false })),
  on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error, loading: false })),
);
*/
