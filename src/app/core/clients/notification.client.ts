import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';

import { BaseClient } from '../bases/base.client';
import { NotificationDto } from '../dtos/notification/notification.dto';
import { NotificationInputDto } from '../dtos/notification/notification.input-dto';
import { AccountService } from '../services/account.service';
import { NotificationService } from '../services/notification.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationClient extends BaseClient {
  constructor(
    private _notificationService: NotificationService,
    accoutnService: AccountService) {
    super(accoutnService);
  }

  protected get url(): string {
    return environment.notification;
  }

  sendNotification(dto: NotificationInputDto): boolean {
    let result: boolean;
    this._hubConnection.invoke("CreateNotificationAsync", dto)
      .then(() => result = true)
      .catch(() => result = false);

    return result;
  }

  protected registerMethods(): void {
    this._hubConnection.on("GetNotification", (response: NotificationDto) => {
      this._notificationService.addNotification(response);
    })
  }
}
