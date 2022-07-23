import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './presentation/login/login.component';
import { MainComponent } from './presentation/main/main.component';
import { NavComponent } from './presentation/nav/nav.component';
import { PostComponent } from './presentation/posts/shered/post/post.component';
import { PostBoardComponent } from './presentation/posts/post-board/post-board.component';
import { RegisterComponent } from './presentation/register/register.component';
import { PostUserComponent } from './presentation/posts/post-user/post-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavComponent,
    PostComponent,
    PostBoardComponent,
    RegisterComponent,
    PostUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
