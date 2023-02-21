import { map } from 'rxjs/operators';
import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { FriendDtoProfile } from 'src/app/core/map-profiles/friend-dto.profile';
import { FriendModel } from 'src/app/core/models/friends/friend.model';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {
  friends: FriendModel[] = [];

  constructor(
    private _accountService: AccountService,
    private _friendDataService: FriendDataService) { }

  ngOnInit(): void {
    this.initFriends();
  }

  private initFriends() {
    const user = this._accountService.getUser();
    this._friendDataService.getsByUserId(user.id)
      .pipe(map(response => response.map(x => FriendDtoProfile.mapToFriendModel(x))))
      .subscribe(response => this.friends = response);
  }
}
