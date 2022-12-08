import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './components/chat/chat.component';
import {
    MessageBubbleComponent
} from './components/chat/message/message-bubble/message-bubble.component';
import { MessageComponent } from './components/chat/message/message.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/nav/nav.component';
import { PostBubbleComponent } from './components/post/post-bubble/post-bubble.component';
import { PostComponent } from './components/post/post.component';
import { RegisterComponent } from './components/register/register.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AuthorizationService } from './core/services/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MessageComponent,
    MessageBubbleComponent,
    NavComponent,
    PostBubbleComponent,
    PostComponent,
    RegisterComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { 
      provide: APP_INITIALIZER, 
      useFactory(authorizationService: AuthorizationService) {
        return () => authorizationService.authorize();
      },
      deps: [ AuthorizationService ],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
