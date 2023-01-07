import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SocialChatClient } from '../clients/social-chat.client';
import { AuthorizationAddressConst } from '../constants/authorization-address-const';
import { ComponentAddressConst } from '../constants/component-address-const';
import { AuthorizationDataService } from '../data-services/authorization.data-service';
import { AuthorizeDto } from '../models/authorize.dto';
import { LoginDto } from '../models/login.dto';
import { AccountService } from './account.service';
import { BaseService } from './bases/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService{

  constructor(
    private _accountService: AccountService,
    private _authorizationDataService: AuthorizationDataService,
    private _socialChatService: SocialChatClient,
    private _router: Router) {
  }
  authorize() {
    this._authorizationDataService.getToken()
      .subscribe(response => {
        this._accountService.setUser(response);
        this._socialChatService.connect();
      }, error => {
        this._accountService.removeUser();
      });
  }

  login(dto: LoginDto) {
    this._authorizationDataService.login(dto)
      .subscribe(response => {
        this._accountService.setUser(response);
        this._socialChatService.connect();
        this._router.navigateByUrl(ComponentAddressConst.main);
      });
  }

  logout() {
    this._accountService.removeUser();
  }
}
