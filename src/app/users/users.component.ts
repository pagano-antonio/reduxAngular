// users.component.ts (standalone)
/*
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { loadUsers } from '../state/users/users.actions';
import { selectError, selectLoading, selectUsers } from '../state/users/users.selectors';

@Component({
    selector: 'app-users',
    standalone: true,
    imports: [CommonModule],
    template: `
    <section class="p-4">
      <h2>Users</h2>

      <button (click)="reload()">Reload</button>

      <p *ngIf="loading()">Caricamento...</p>
      <p *ngIf="error()">Errore: {{ error() }}</p>

      <ul>
        <li *ngFor="let u of users()">{{ u.name }}</li>
      </ul>
    </section>
  `,
})
export class UsersComponent {
    private store = inject(Store);

    users = this.store.selectSignal(selectUsers);
    loading = this.store.selectSignal(selectLoading);
    error = this.store.selectSignal(selectError);

    ngOnInit() {
        this.store.dispatch(loadUsers());
    }

    reload() {
        this.store.dispatch(loadUsers());
    }
}
*/