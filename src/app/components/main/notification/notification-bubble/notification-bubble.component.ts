import { FriendDataService } from 'src/app/core/data-services/friend.data-service';
import { NotificationDto } from 'src/app/core/dtos/notification/notification.dto';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification-bubble',
  templateUrl: './notification-bubble.component.html',
  styleUrls: ['./notification-bubble.component.css'],
})
export class NotificationBubbleComponent implements OnInit {
  @Input() notification: NotificationDto;

  @Output() outputEvent = new EventEmitter<string>();

  userName: string;

  constructor(private _friendDataService: FriendDataService) {}

  ngOnInit(): void {
    this.userName = `${this.notification.user.firstName} ${this.notification.user.lastName}`;
  }

  accept(): void {
    this._friendDataService
      .create({
        inviterId: this.notification.userId,
        recipientId: this.notification.recipientId,
      })
      .subscribe();

    this.outputEvent.emit(this.notification.id);
  }

  remove(): void {
    this.outputEvent.emit(this.notification.id);
  }
}
