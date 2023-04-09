import { UserSlimDto } from '../user/user.slim-dto';
import { NotificationInputDto } from './notification.input-dto';

export interface NotificationDto extends NotificationInputDto {
    id: string;
    user: UserSlimDto;
}