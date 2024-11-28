import { CanActivate, CanActivateChild, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript/typescript.component';
import { FormComponent } from './form/form.component';
import { CallbackPromiseComponent } from './callback-promise/callback-promise.component';

export const routes: Routes = [
    { path: 'login', component: FormComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'callback', component: CallbackPromiseComponent },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "**", component: TypescriptComponent },
  ];

