import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthorizationAddressConst } from '../constants/authorization-address-const';
import { AuthorizeDto } from '../models/authorize-dto';
import { LoginDto } from '../models/login-dto';
import { AccountService } from './account.service';
import { BaseService } from './bases/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService extends BaseService{

  constructor(http: HttpClient, private accountService: AccountService) {
    super(http);
  }
  
  getRefreshToken() {
    this.get<AuthorizeDto>(AuthorizationAddressConst.refreshToken)
      .subscribe(response => {
        this.accountService.setUser(response);
      });
  }

  login(dto: LoginDto) {
    this.post<AuthorizeDto, LoginDto>(AuthorizationAddressConst.login, dto, true)
      .subscribe(response => {
        this.accountService.setUser(response);
      });
  }
}
