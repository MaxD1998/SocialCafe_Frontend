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
        path: 'chat',
        loadChildren: () => import('./components/chat/chat.module').then(m => m.ChatModule),
      },
      {
        path: 'friend',
        loadChildren: () => import('./components/friend/friend.module').then(m => m.FriendModule),
      },
      {
        path: 'main',
        loadChildren: () => import('./components/main/main.module').then(m => m.MainModule),
      },
      {
        path: 'user-details/:id',
        loadChildren: () => import('./components/user-details/user-details.module').then(m => m.UserDetailsModule),
      },
      {
        path: 'user-edit/:id',
        loadChildren: () => import('./components/user-edit/user-edit.module').then(m => m.UserEditModule),
      },
    ],
  },
  {
    path: '',
    loadChildren: () => import('./components/authorization/authorization.module').then(m => m.AuthorizationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
