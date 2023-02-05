import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { FriendDto } from 'src/app/core/dtos/friend/friend.dto';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-conversation-popup',
  templateUrl: './new-conversation-popup.component.html',
  styleUrls: ['./new-conversation-popup.component.css']
})
export class NewConversationPopupComponent implements OnInit {
  friends: FriendDto[];

  constructor(
    private _accountService: AccountService, 
    private _friendDataService: FriendDataService) { }

  ngOnInit(): void {
    this.initSelectListItems();
  }
  
  private initSelectListItems()
  {
    const user = this._accountService.getUser();
    this._friendDataService.getFriendsByUserId(user.id)
      .subscribe(response => this.friends = response);
  }

}
