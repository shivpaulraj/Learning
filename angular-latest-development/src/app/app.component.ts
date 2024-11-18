import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,
    MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-latest-development';

  
  constructor(){
    const count = signal(0);
    console.log("The count is: " + count() );
    count.set(3);
    console.log("The count is: " + count() );

    // Increment the count by 1.
count.update(value => value + 1);
console.log("The count is: " + count() );

const count1: WritableSignal<number> = signal(0);
count1.set(3);
const doubleCount: Signal<number> = computed(() => count1() * 2);

console.log("The Doublr count is: " + doubleCount() +  count1() );

}
// Signals are getter functions - calling them reads their value.

}
