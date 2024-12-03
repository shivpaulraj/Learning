import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-one-component',
  standalone: true,
  imports: [],
  template: `<h3>Child Component: {{ data }}</h3>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildOneComponentComponent {

  @Input() data!: number;

  ngDoCheck() {
    console.log('Child Component Checked (OnPush)');
  }
}

