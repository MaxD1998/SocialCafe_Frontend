import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthorizationAddressConst } from '../constants/authorization-address-const';
import { ComponentAddressConst } from '../constants/component-address-const';
import { AuthorizeDto } from '../models/authorize-dto';
import { LoginDto } from '../models/login-dto';
import { AccountService } from './account.service';
import { BaseService } from './bases/base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService extends BaseService{

  constructor(
    http: HttpClient, 
    private accountService: AccountService,
    private router: Router) {
    super(http);
  }
  
  getToken(): Observable<AuthorizeDto> {
    return this.get<AuthorizeDto>(AuthorizationAddressConst.refreshToken, true)
  }

  login(dto: LoginDto) {
    this.post<AuthorizeDto, LoginDto>(AuthorizationAddressConst.login, dto, true)
      .subscribe(response => {
        this.accountService.setUser(response);
        this.router.navigateByUrl(ComponentAddressConst.main);
      });
  }
}
