import { Component } from '@angular/core';

@Component({
  selector: 'app-can-deactivate',
  standalone: true,
  imports: [],
  templateUrl: './can-deactivate.component.html',
  styleUrl: './can-deactivate.component.scss'
})
export class CanDeactivateComponent {

  isFormDirty = false;

  onInputChange(): void {
    this.isFormDirty = true;
  }

  canDeactivate(): boolean {
    console.log(this.isFormDirty);
    if (!this.isFormDirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
