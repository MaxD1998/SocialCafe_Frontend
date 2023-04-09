import { NotificationClient } from 'src/app/core/clients/notification.client';
import { UserSlimDto } from 'src/app/core/dtos/user/user.slim-dto';
import { NotificationType } from 'src/app/core/enums/notification-type';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, Input } from '@angular/core';

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
    private _notificationClient: NotificationClient) { }

  add() {
    const user = this._accountService.getUser();
    this._notificationClient.sendNotification({
      isRead: false,
      userId: user.id,
      type: NotificationType.FriendInvitation,
      recipientId: this.user.id
    });
  }

  abadon() {
    // Logika do napisania w zadaniu "Zmiana sposobu dodawania znajomych"
  }
}
