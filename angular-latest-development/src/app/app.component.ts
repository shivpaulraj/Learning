import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ReversePipePipe } from "./Pipes/reverse-pipe.pipe";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, ReversePipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-latest-development';
}
