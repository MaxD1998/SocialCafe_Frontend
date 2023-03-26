import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
      { 
        path: 'main',
        loadChildren: () => import('./components/main/main.module').then(m => m.MainModule)
      },
      { 
        path: 'chat',
        loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule)
      },
      { 
        path: 'friend',
        loadChildren: () => import('./components/friend/friend.module').then(m => m.FriendModule)
      },
    ]
  },
  { 
    path: '',
    loadChildren: () => import('./components/authorization/authorization.module').then(m => m.AuthorizationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
