// users.effects.ts
/*
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UsersActions from './users.actions';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class UsersEffects {
  private actions$   = inject(Actions);
  private http       = inject(HttpClient);

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      switchMap(() =>
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').pipe(
          map(users => UsersActions.loadUsersSuccess({ users })),
          catchError(err => of(UsersActions.loadUsersFailure({ error: String(err?.message || err) })))
        )
      )
    )
  );
}
*/