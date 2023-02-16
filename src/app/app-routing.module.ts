import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { ComponentRoute } from './core/constants/routes/component.route';
import { AuthorizationGuard } from './core/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: ComponentRoute.main,
    pathMatch: 'full',
  },
  {
    path: '',
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'main', component: MainComponent },
      { 
        path: 'chat',
        loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule)
      },
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
