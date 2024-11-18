import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { promises } from 'dns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-latest-development';
//Using Promise


}
