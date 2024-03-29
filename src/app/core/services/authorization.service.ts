import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { NotificationClient } from '../clients/notification.client';
import { SocialChatClient } from '../clients/social-chat.client';
import { ComponentRoute } from '../constants/routes/component.route';
import { AuthorizationDataService } from '../data-services/authorization.data-service';
import { AuthorizeDto } from '../dtos/authorize.dto';
import { LoginDto } from '../dtos/login.dto';
import { RegisterDto } from '../dtos/register.dto';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor(
    private _accountService: AccountService,
    private _authorizationDataService: AuthorizationDataService,
    private _notificationClient: NotificationClient,
    private _socialChatClient: SocialChatClient,
    private _router: Router
  ) {}
  async authorize(): Promise<void> {
    const response: AuthorizeDto = await this._authorizationDataService
      .getToken()
      .toPromise()
      .catch(() => null);

    if (response) {
      this._accountService.setUser(response);
      this._socialChatClient.connect();
      this._notificationClient.connect();
    } else {
      this._accountService.removeUser();
      this._authorizationDataService.logout();
    }
  }

  login(dto: LoginDto): void {
    this._authorizationDataService.login(dto).subscribe(response => this.initUser(response));
  }

  register(dto: RegisterDto): void {
    this._authorizationDataService.register(dto).subscribe(response => this.initUser(response));
  }

  logout(): void {
    this._notificationClient.disconnect();
    this._socialChatClient.disconnect();
    this._accountService.removeUser();
    this._authorizationDataService.logout();
    this._router.navigateByUrl(ComponentRoute.login);
  }

  private initUser(dto: AuthorizeDto): void {
    this._accountService.setUser(dto);
    this._socialChatClient.connect();
    this._notificationClient.connect();
    this._router.navigateByUrl(ComponentRoute.main);
  }
}
