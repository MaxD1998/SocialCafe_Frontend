import { InvitationType } from '../../enums/invitation.type';
import { UserSlimDto } from './user.slim-dto';

export interface InviteUserDto extends UserSlimDto {
  notificationId: string;
  type: InvitationType;
}
