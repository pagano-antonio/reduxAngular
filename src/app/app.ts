import { Component } from '@angular/core';
import { CounterComponent } from './state/counter/counter';

@Component({
  selector: 'app-root',
  // imports: [CounterComponent, UsersComponent],
  imports: [CounterComponent],

  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'reduxAngular';
}
