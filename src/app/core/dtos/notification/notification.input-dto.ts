import { NotificationType } from '../../enums/notification.type';

export interface NotificationInputDto {
  isRead: boolean;
  recipientId: string;
  type: NotificationType;
  userId: string;
}
