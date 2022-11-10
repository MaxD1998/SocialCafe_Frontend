import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AccountService } from './core/services/account.service';
import { AuthorizationService } from './core/services/authorization.service';

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
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { 
      provide: APP_INITIALIZER, 
      useFactory(accountService: AccountService) {
        return () => accountService.loadUser();
      },
      deps: [ AccountService ],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
