import { Observable } from 'rxjs';

import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { UserRoute } from '../constants/routes/api-routes/user.route';
import { UserSlimDto } from '../dtos/user/user.slim-dto';

@Injectable({
  providedIn: 'root',
})
export class UserDataService extends BaseDataService {
  getsByNamesExceptUserFriends(firstName: string, lastName: string): Observable<UserSlimDto[]> {
    let params = new HttpParams();
    params = params.append('firstName', firstName);
    params = params.append('lastName', lastName);

    return this.httpGet(UserRoute.getsNamesExceptUserFriends, { params: params });
  }
}
