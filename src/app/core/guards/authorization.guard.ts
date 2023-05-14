import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { ComponentRoute } from '../constants/routes/component.route';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationGuard implements CanActivate {
  constructor(private _accountService: AccountService, private _router: Router) {}

  canActivate(): boolean | UrlTree {
    if (!this._accountService.isSignedIn()) {
      return this._router.parseUrl(ComponentRoute.login);
    }

    return true;
  }
}
