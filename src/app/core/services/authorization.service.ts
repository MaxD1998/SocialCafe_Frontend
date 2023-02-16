import { CookieService } from 'ngx-cookie-service';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SocialChatClient } from '../clients/social-chat.client';
import { CookiesNameConst } from '../constants/cookies-name.const';
import { ComponentRoute } from '../constants/routes/component.route';
import { AuthorizationDataService } from '../data-services/authorization.data-service';
import { AuthorizeDto } from '../dtos/authorize.dto';
import { LoginDto } from '../dtos/login.dto';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService{

  constructor(
    private _accountService: AccountService,
    private _authorizationDataService: AuthorizationDataService,
    private _cookieService: CookieService,
    private _socialChatService: SocialChatClient,
    private _router: Router) {
  }
  authorize(): void {
    const id: number = +this._cookieService.get(CookiesNameConst.id);

    if (id === 0) {
      this.logout();
      return;
    }

    const tempUser: AuthorizeDto = {
      id: id,
      token: "",
      username: "",
    }

    this._accountService.setUser(tempUser);
    this._authorizationDataService.getToken()
      .subscribe(response => {
        this._accountService.setUser(response);
        this._socialChatService.connect();
      }, () => {
        this._accountService.removeUser();
      });
  }

  login(dto: LoginDto): void {
    this._authorizationDataService.login(dto)
      .subscribe(response => {
        this._accountService.setUser(response);
        this._socialChatService.connect();
        this._router.navigateByUrl(ComponentRoute.main);
      });
  }

  logout(): void {
    this._accountService.removeUser();
  }
}
