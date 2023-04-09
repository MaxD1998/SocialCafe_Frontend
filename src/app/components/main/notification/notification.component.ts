import { NotificationDataService } from 'src/app/core/data-services/notification.data-service';
import { AccountService } from 'src/app/core/services/account.service';
import { NotificationService } from 'src/app/core/services/notification.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(
    private _accountService: AccountService,
    private _notificationDataService: NotificationDataService,
    public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.initNotifications();
  }

  initNotifications() {
    const user = this._accountService.getUser();
    this._notificationDataService.getsByRecipientId(user.id)
      .subscribe(response => this.notificationService.notifications = response);
  }

  removeNotification(id: string) {
    this._notificationDataService.delete(id)
      .subscribe(() => {
        this.notificationService.removeNotification(id);
      });
  }
}
