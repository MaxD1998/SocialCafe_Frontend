import { Observable } from 'rxjs';

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { UserRoute } from '../constants/routes/api-routes/user.route';
import { InviteUserDto } from '../dtos/user/invite-user.dto';
import { UserDto } from '../dtos/user/user.dto';
import { UserInputDto } from '../dtos/user/user.input-dto';

@Injectable({
  providedIn: 'root',
})
export class UserDataService extends BaseDataService {
  getById(id: string): Observable<UserDto> {
    return this.httpGet<UserDto>(UserRoute.getById + id);
  }

  getsByNamesExceptUserFriends(firstName: string, lastName: string): Observable<InviteUserDto[]> {
    const params = new HttpParams().append('firstName', firstName).append('lastName', lastName);
    return this.httpGet<InviteUserDto[]>(UserRoute.getsNamesExceptUserFriends, { params: params });
  }

  update(id: string, dto: UserInputDto): Observable<UserDto> {
    return this.httpPut<UserDto, UserInputDto>(UserRoute.update + id, dto);
  }
}
