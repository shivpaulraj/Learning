import { CanActivate, CanActivateChild, Routes } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

export const routes: Routes = [
    { path: 'login', component: FirstComponent },
    { path: 'home', component: SecondComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "**", component: SecondComponent },
  ];

