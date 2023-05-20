import { NotificationClient } from 'src/app/core/clients/notification.client';
import { NotificationType } from 'src/app/core/enums/notification.type';
import { AccountService } from 'src/app/core/services/account.service';

import { Component, Input } from '@angular/core';
import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { InviteUserDto } from 'src/app/core/dtos/user/invite-user.dto';
import { InvitationType } from 'src/app/core/enums/invitation.type';
import { GuidHelper } from 'src/app/core/helpers/guid.helper';

@Component({
  selector: 'app-friend-select-item',
  templateUrl: './friend-select-item.component.html',
  styleUrls: ['./friend-select-item.component.scss'],
})
export class FriendSelectItemComponent {
  @Input() user: InviteUserDto;

  isDisable: boolean = false;
  type: typeof InvitationType = InvitationType;

  private userId: string;

  constructor(
    private _friendDataService: FriendDataService,
    private _notificationClient: NotificationClient,
    _accountService: AccountService
  ) {
    const user = _accountService.getUser();
    this.userId = user.id;
  }

  add(): void {
    this._notificationClient
      .sendNotification({
        isRead: false,
        userId: this.userId,
        type: NotificationType.FriendInvitation,
        recipientId: this.user.id,
      })
      .then(respose => {
        this.user.notificationId = respose;
        this.user.type = InvitationType.Invited;
      })
      .catch(() => {
        this.user.notificationId = GuidHelper.empty;
        this.user.type = InvitationType.None;
      });
  }

  abadon(): void {
    this._notificationClient.removeNotification(this.user.notificationId).then(response => {
      this.user.type = response ? InvitationType.None : InvitationType.Invited;
    });
  }

  accept(): void {
    this._friendDataService
      .create({
        inviterId: this.user.id,
        recipientId: this.userId,
      })
      .subscribe(response => {
        if (response) {
          this._notificationClient.removeNotification(this.user.notificationId).then(response => {
            if (!response) {
              return;
            }

            this._notificationClient.removeNotification(this.user.notificationId);
          });
        }
      });
  }
}
