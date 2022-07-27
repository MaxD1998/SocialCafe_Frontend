import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/login/login.component';
import { MainComponent } from './presentation/main/main.component';
import { MessageBoardComponent } from './presentation/messages/message-board/message-board.component';
import { MessageComponent } from './presentation/messages/shered/message/message.component';
import { NavComponent } from './presentation/nav/nav.component';
import { PostComponent } from './presentation/posts/shered/post/post.component';
import { PostBoardComponent } from './presentation/posts/post-board/post-board.component';
import { PostUserComponent } from './presentation/posts/post-user/post-user.component';
import { RegisterComponent } from './presentation/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MessageBoardComponent,
    MessageComponent,
    NavComponent,
    PostComponent,
    PostBoardComponent,
    PostUserComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
