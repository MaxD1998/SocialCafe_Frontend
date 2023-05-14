import { Injectable } from '@angular/core';

import { NotificationDto } from '../dtos/notification/notification.dto';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  notifications: NotificationDto[] = [];

  constructor() {}

  addNotification(dto: NotificationDto): void {
    this.notifications = [dto].concat(this.notifications);
  }

  removeNotification(id: string): void {
    this.notifications = this.notifications.filter(x => x.id !== id);
  }
}
