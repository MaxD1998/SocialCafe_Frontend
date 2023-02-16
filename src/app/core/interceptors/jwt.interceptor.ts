import { Observable } from 'rxjs';

import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AccountService } from '../services/account.service';
import { BaseInterceptor } from './base.interceptor';

@Injectable()
export class JwtInterceptor extends BaseInterceptor {

  constructor(accountService: AccountService) {
    super(accountService)
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.setAuthHeader(request, next);
  }
}
