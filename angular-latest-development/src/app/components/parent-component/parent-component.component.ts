import { ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChildOneComponentComponent } from "../child-one-component/child-one-component.component";
import { ChildTwoComponentComponent } from "../child-two-component/child-two-component.component";

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [RouterModule, ChildOneComponentComponent,ChildTwoComponentComponent],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss'
})
export class ParentComponentComponent {
  counter = 0;

  // increment() {
  //   this.counter++;
  // }
  // counter = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  increment() {
    this.counter++;
    this.cdr.markForCheck(); // Notify OnPush children.
  }
}
