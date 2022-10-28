import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MessageComponent } from './components/message/message.component';
import { NavComponent } from './components/nav/nav.component';
import { PostComponent } from './components/post/post.component';
import { RegisterComponent } from './components/register/register.component';
import { SharedModule } from './components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MessageComponent,
    NavComponent,
    PostComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
