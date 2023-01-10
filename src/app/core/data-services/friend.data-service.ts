import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { FriendRoute } from '../constants/api-routes/friend.route';
import { FriendDto } from '../models/friend/friend.dto';
import { BaseDataService } from './bases/base.data-service';

@Injectable({
  providedIn: 'root'
})
export class FriendDataService extends BaseDataService {
  getFriendsByUserId(id: number): Observable<FriendDto> {
    return this.get<FriendDto>(FriendRoute.getUserId + id);
  }
}
