import { Observable } from 'rxjs/internal/Observable';

import { Injectable } from '@angular/core';

import { AuthorizationAddressConst } from '../constants/authorization-address-const';
import { AuthorizeDto } from '../models/authorize.dto';
import { LoginDto } from '../models/login.dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDataService extends BaseDataService {
  getToken(): Observable<AuthorizeDto> {
    return this.get<AuthorizeDto>(AuthorizationAddressConst.refreshToken, true)
  }

  login(dto: LoginDto): Observable<AuthorizeDto> {
    return this.post<AuthorizeDto, LoginDto>(AuthorizationAddressConst.login, dto, true)
  }
}
