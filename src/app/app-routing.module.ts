import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MessageComponent } from './components/message/message.component';
import { RegisterComponent } from './components/register/register.component';
import { ComponentAddressConst } from './core/constants/component-address-const';
import { AuthorizationGuard } from './core/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: ComponentAddressConst.main,
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'main', component: MainComponent },
      { path: 'message', component: MessageComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
