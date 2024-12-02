import { CanActivate, CanActivateChild, Routes } from '@angular/router';
import { TypescriptComponent } from './components/typescript/typescript.component';
import { FormComponent } from './components/form/form.component';
import { CallbackPromiseComponent } from './components/callback-promise/callback-promise.component';
import { VarLetConstComponent } from './components/var-let-const/var-let-const.component';
import { RecursiveFunctionComponent } from './components/recursive-function/recursive-function.component';
import { AuthGuard } from './services/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { ChildOneComponentComponent } from './components/child-one-component/child-one-component.component';
import { ChildTwoComponentComponent } from './components/child-two-component/child-two-component.component';
import { AuthChildGuard } from './services/auth-child-guard.service';
import { CanDeactivateGuard } from './services/can-deactivate.guard';
import { CanDeactivateComponent } from './components/can-deactivate/can-deactivate.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'typescript', component: TypescriptComponent },
    { path: 'callback', component: CallbackPromiseComponent },
    { path: 'varletconst', component: VarLetConstComponent },
    { path: 'login', component: LoginComponent },
    { path: 'canDeacticate', component: CanDeactivateComponent, canDeactivate: [CanDeactivateGuard] },
    { path: 'protected', component: VarLetConstComponent, canActivate: [AuthGuard] },//canActivateChild, canDeactivate, Resolve, onLoad
    { path: 'RecursiveFunction', component: RecursiveFunctionComponent },
    {
      path: 'parent',
      component: ParentComponentComponent,
      canActivateChild: [AuthChildGuard],
      children: [
        { path: 'child-one', component: ChildOneComponentComponent },
        { path: 'child-two', component: ChildTwoComponentComponent },
      ]
    },
    { path: "", redirectTo: "/form", pathMatch: "full" },
    { path: "**", component: TypescriptComponent },
  ];

