import { Observable } from 'rxjs/internal/Observable';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { AuthorizationRoute } from '../constants/routes/api-routes/authorization.route';
import { AuthorizeDto } from '../dtos/authorize.dto';
import { LoginDto } from '../dtos/login.dto';
import { RegisterDto } from '../dtos/register.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationDataService extends BaseDataService {
  getToken(): Observable<AuthorizeDto> {
    return this.httpGet<AuthorizeDto>(AuthorizationRoute.refreshToken, { withCredentials: true });
  }

  login(dto: LoginDto): Observable<AuthorizeDto> {
    return this.httpPost<AuthorizeDto, LoginDto>(AuthorizationRoute.login, dto, true);
  }

  logout(): void {
    this.httpPost(AuthorizationRoute.logout, null);
  }

  register(dto: RegisterDto): Observable<AuthorizeDto> {
    return this.httpPost(AuthorizationRoute.register, dto);
  }
}
