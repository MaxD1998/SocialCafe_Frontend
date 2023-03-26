import { UserDataService } from 'src/app/core/data-services/user.data-service';
import { UserSlimDto } from 'src/app/core/dtos/user/user.slim-dto';
import { AccountService } from 'src/app/core/services/account.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-friend-search-list',
  templateUrl: './friend-search-list.component.html',
  styleUrls: ['./friend-search-list.component.css']
})
export class FriendSearchListComponent {

  users: UserSlimDto[] = [];

  constructor(
    private _userDataService: UserDataService) { }

  search(element: HTMLInputElement): void {
    const value = element.value;
    const names = value
      .trim()
      .split(" ");

    if (names.length < 2) {
      for (let i = names.length; i < 2; i++) {
        names.push("");
      }
    }

    this._userDataService.getsByNamesExceptUserFriends(names[0], names[1])
      .subscribe(response => {this.users = response; console.log(response)})
  }
}
