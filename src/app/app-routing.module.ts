import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './presentation/login/login.component';
import { MainComponent } from './presentation/main/main.component';
import { MessageBoardComponent } from './presentation/messages/message-board/message-board.component';
import { RegisterComponent } from './presentation/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'message', component: MessageBoardComponent},
  {path: '**', component: MainComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
