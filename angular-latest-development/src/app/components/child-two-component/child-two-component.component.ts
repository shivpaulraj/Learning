import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-child-two-component',
//   standalone: true,
//   imports: [],
//   templateUrl: './child-two-component.component.html',
//   styleUrl: './child-two-component.component.scss'
// })
// export class ChildTwoComponentComponent {

// }

@Component({
  selector: 'app-child-two-component',
  template: `
    <h3>Child Component: {{ data }}</h3>
    <button (click)="forceUpdate()">Force Update</button>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildTwoComponentComponent {
  @Input() data!: number;

  constructor(private cdr: ChangeDetectorRef) {
    
  }

  forceUpdate() {
    this.cdr.markForCheck(); // Manually mark for change detection
  }
  triggerUpdate() {
    this.cdr.detectChanges(); // Manually triggers change detection.
  }
  ngDoCheck() {
    console.log('Child Component Checked (OnPush with markForCheck)');
  }
}
