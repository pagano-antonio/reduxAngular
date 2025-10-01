import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface CounterState {
  value: number
}

export const initialState: CounterState = { value: 0 };

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => ({ value: state.value + 1 })),
  on(CounterActions.decrement, state => ({ value: state.value - 1 })),
  on(CounterActions.reset, _state => ({ value: 0 }))
);

