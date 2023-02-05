import { CookieService } from 'ngx-cookie-service';

import { Injectable } from '@angular/core';

import { CookiesNameConst } from '../constants/cookies-name.const';
import { AuthorizeDto } from '../dtos/authorize.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private _user: AuthorizeDto = null;

  constructor(private _cookieService: CookieService) {
  }

  getUser(): AuthorizeDto {
    return this._user;
  }

  isSignedIn(): boolean {
    return this._user !== null;
  }

  setUser(dto: AuthorizeDto): void {
    this._user = dto;
  }

  removeUser(): void {
    this._user = null;
    this._cookieService.delete(CookiesNameConst.id);
  }
}
