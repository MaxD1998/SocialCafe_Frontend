import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../bases/base.data-service';
import { FriendRoute } from '../constants/routes/api-routes/friend.route';
import { FriendDto } from '../dtos/friend/friend.dto';
import { FriendInputDto } from '../dtos/friend/friend.input-dto';

@Injectable({
  providedIn: 'root'
})
export class FriendDataService extends BaseDataService {
  create(dto: FriendInputDto): Observable<FriendDto> {
    return this.httpPost<FriendDto, FriendInputDto>(FriendRoute.create, dto);
  }

  deleteUserFriend(id: string): Observable<boolean> {
    return this.httpDelete(FriendRoute.deleteFriendUser + id);
  }

  getsByUserId(id: string): Observable<FriendDto[]> {
    return this.httpGet<FriendDto[]>(FriendRoute.getUserId + id);
  }
}
