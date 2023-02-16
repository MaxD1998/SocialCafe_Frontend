import { Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccountService } from '../services/account.service';

@Injectable()
export abstract class BaseInterceptor implements HttpInterceptor {

  constructor(protected accountService: AccountService) {}

  abstract intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>

  setAuthHeader(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let user = this.accountService.getUser();

    if (this.accountService.isSignedIn() && user != null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }

    return next.handle(request);
  }
}
