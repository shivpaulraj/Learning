import { CanActivate, CanActivateChild, Routes } from '@angular/router';
import { TypescriptComponent } from './typescript/typescript.component';
import { FormComponent } from './form/form.component';
import { CallbackPromiseComponent } from './callback-promise/callback-promise.component';
import { VarLetConstComponent } from './var-let-const/var-let-const.component';
import { RecursiveFunctionComponent } from './recursive-function/recursive-function.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'callback', component: CallbackPromiseComponent },
    { path: 'varletconst', component: VarLetConstComponent },
    { path: 'RecursiveFunction', component: RecursiveFunctionComponent },
    { path: "", redirectTo: "/form", pathMatch: "full" },
    { path: "**", component: TypescriptComponent },
  ];

