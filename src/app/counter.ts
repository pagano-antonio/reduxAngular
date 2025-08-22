import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCounterValue } from './state/counter/counter.selectors';
import { decrement, increment, reset } from './state/counter/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="p-4">
      <h2>Counter con NgRx</h2>
      <p style="font-size:2rem">Valore: <strong>{{ value() }}</strong></p>
      <button (click)="onDec()">-</button>
      <button (click)="onInc()">+</button>
      <button (click)="onReset()">Reset</button>
    </section>
  `,
})
export class CounterComponent {
  private store = inject(Store);

  // Signal derivato dallo store (Angular 16+)
  value = this.store.selectSignal(selectCounterValue);

  onInc()   { this.store.dispatch(increment()); }
  onDec()   { this.store.dispatch(decrement()); }
  onReset() { this.store.dispatch(reset()); }
}
