import { Injectable } from '@angular/core';

import { AuthorizeDto } from '../dtos/authorize.dto';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private _user: AuthorizeDto = null;

  getUser(): AuthorizeDto {
    return this._user;
  }

  isSignedIn(): boolean {
    return this._user !== null;
  }

  setUser(dto: AuthorizeDto): void {
    this._user = dto;
  }

  setUsername(username: string): void {
    this._user.username = username;
  }

  removeUser(): void {
    this._user = null;
  }
}
