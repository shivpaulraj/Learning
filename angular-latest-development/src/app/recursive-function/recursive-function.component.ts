import { Component } from '@angular/core';

@Component({
  selector: 'app-recursive-function',
  standalone: true,
  imports: [],
  templateUrl: './recursive-function.component.html',
  styleUrl: './recursive-function.component.scss'
})
export class RecursiveFunctionComponent {
// Program to countdown till 1
constructor(){
// recursive function
function counter(count:number) {

    // display count
    console.log(count);

    // condition for stopping
    if(count > 1) {

        // decrease count
        count = count - 1;

        // call counter with new value of count
        counter(count);
    } else {

        // terminate execution
        return;
    };
};

// access function
counter(5);
}
}