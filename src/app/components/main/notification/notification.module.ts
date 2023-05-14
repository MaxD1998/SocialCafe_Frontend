import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotificationBubbleComponent } from './notification-bubble/notification-bubble.component';
import { NotificationComponent } from './notification.component';

@NgModule({
  declarations: [NotificationBubbleComponent, NotificationComponent],
  exports: [NotificationComponent],
  imports: [CommonModule],
})
export class NotificationModule {}
