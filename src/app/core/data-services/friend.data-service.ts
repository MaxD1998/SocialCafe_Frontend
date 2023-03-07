import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { FriendRoute } from '../constants/routes/api-routes/friend.route';
import { FriendDto } from '../dtos/friend/friend.dto';
import { FriendInputDto } from '../dtos/friend/friend.input-dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class FriendDataService extends BaseDataService {
  create(dto: FriendInputDto): Observable<FriendDto> {
    return this.post<FriendDto, FriendInputDto>(FriendRoute.create, dto);
  }

  deleteUserFriend(id: string): Observable<boolean> {
    return this.delete(FriendRoute.deleteFriendUser + id);
  }

  getsByUserId(id: string): Observable<FriendDto[]> {
    return this.get<FriendDto[]>(FriendRoute.getUserId + id);
  }
}
