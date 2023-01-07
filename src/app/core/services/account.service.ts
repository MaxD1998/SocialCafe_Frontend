import { CookieService } from 'ngx-cookie-service';

import { Injectable } from '@angular/core';

import { AuthorizeDto } from '../models/authorize.dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly cookieItem = "RefreshToken"
  private user: AuthorizeDto = null;

  constructor(private cookieService: CookieService) {

  }

  getUser(): AuthorizeDto {
    return this.user;
  }

  isSignedIn(): boolean {
    return this.cookieService.get(this.cookieItem) != "";
  }

  setUser(dto: AuthorizeDto): void {
    this.user = dto;
  }

  removeUser(): void {
    this.user = null;
    this.cookieService.delete(this.cookieItem);
  }
}
