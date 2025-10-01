
import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCounterValue } from './counter.selectors';
import { decrement, increment, reset } from './counter.actions';
//import { selectCounterValue } from './counter.selectors';
//import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="p-4">
      <h2>Counter con NgRx</h2>
      <p style="font-size:2rem">Valore: <strong>{{ valueC() }}</strong></p>
      <button (click)="onDec()">-</button>
      <button (click)="onInc()">+</button>
      <button (click)="onReset()">Reset</button>
    </section>
  `,
})
export class CounterComponent {
  private store = inject(Store);

  valueC = this.store.selectSignal(selectCounterValue);

  onInc() { this.store.dispatch(increment()); }
  onDec() { this.store.dispatch(decrement()); }
  onReset() { this.store.dispatch(reset()); }

}
