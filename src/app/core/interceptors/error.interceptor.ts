import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthorizationDataService } from '../data-services/authorization.data-service';
import { AccountService } from '../services/account.service';
import { BaseInterceptor } from './base.interceptor';

@Injectable()
export class ErrorInterceptor extends BaseInterceptor{

  constructor(accountService: AccountService, private authorizationDataService: AuthorizationDataService) {
    super(accountService)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        switch (error.status) {
          case 401:
            return this.getToken(request, next);
          case 403:
            this.accountService.removeUser();
            break;
        }
        
        return throwError(error);
      }));
  }

  private getToken(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.authorizationDataService.getToken().pipe(
      switchMap((value) => {
        this.accountService.setUser(value);
        return this.setAuthHeader(request, next);
      })
    );
  }
}
