import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { UserSlimDto } from 'src/app/core/dtos/user/user.slim-dto';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-select-item',
  templateUrl: './friend-select-item.component.html',
  styleUrls: ['./friend-select-item.component.css']
})
export class FriendSelectItemComponent {
  @Input() user: UserSlimDto;

  isDisable: boolean = false

  constructor(
    private _accountService: AccountService, 
    private _friendDataService: FriendDataService) { }

  add() {
    const user = this._accountService.getUser();
    this._friendDataService.create({
      inviterId: user.id,
      recipientId: this.user.id
    })
    .subscribe(() => this.isDisable = true);
  }

}
