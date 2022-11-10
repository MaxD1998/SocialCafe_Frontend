import { Injectable } from '@angular/core';

import { AuthorizeDto } from '../models/authorize-dto';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private readonly userItem = "user"
  private user: AuthorizeDto = null;

  getUser(): AuthorizeDto {
    return this.user;
  }

  isSignedIn(): boolean {
    return this.user != null
  }

  loadUser() {
    this.user = JSON.parse(localStorage.getItem(this.userItem));
  }

  setUser(dto: AuthorizeDto): void {
    this.user = dto;
    localStorage.setItem(this.userItem, JSON.stringify(dto));
  }

  removeUser(): void {
    this.user = null;
    localStorage.removeItem(this.userItem);
  }
}
