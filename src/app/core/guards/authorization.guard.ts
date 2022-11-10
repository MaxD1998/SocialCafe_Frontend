import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { ComponentAddressConst } from '../constants/component-address-const';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorizationGuard implements CanActivate {

  constructor(
    private accountService: AccountService,
    private router: Router) {
  }

  canActivate(): boolean | UrlTree {
    if (!this.accountService.isSignedIn()) {
      return this.router.parseUrl(ComponentAddressConst.login);
    }
    return true;
  }
}
