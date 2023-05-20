import { UserDataService } from 'src/app/core/data-services/user.data-service';

import { Component } from '@angular/core';
import { InviteUserDto } from 'src/app/core/dtos/user/invite-user.dto';

@Component({
  selector: 'app-friend-search-list',
  templateUrl: './friend-search-list.component.html',
  styleUrls: ['./friend-search-list.component.scss'],
})
export class FriendSearchListComponent {
  users: InviteUserDto[] = [];

  constructor(private _userDataService: UserDataService) {}

  search(element: HTMLInputElement): void {
    const value = element.value;
    const names = value.trim().split(' ');

    if (names.length < 2) {
      for (let i = names.length; i < 2; i++) {
        names.push('');
      }
    }

    this._userDataService.getsByNamesExceptUserFriends(names[0], names[1]).subscribe(response => {
      this.users = response;
    });
  }
}
