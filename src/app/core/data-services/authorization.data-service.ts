import { Observable } from 'rxjs/internal/Observable';

import { Injectable } from '@angular/core';

import { AuthorizationRoute } from '../constants/api-routes/authorization.route';
import { AuthorizeDto } from '../models/authorize.dto';
import { LoginDto } from '../models/login.dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationDataService extends BaseDataService {
  getToken(): Observable<AuthorizeDto> {
    return this.get<AuthorizeDto>(AuthorizationRoute.refreshToken, true)
  }

  login(dto: LoginDto): Observable<AuthorizeDto> {
    return this.post<AuthorizeDto, LoginDto>(AuthorizationRoute.login, dto, true)
  }
}
