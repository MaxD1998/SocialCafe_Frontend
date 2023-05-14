import { UserSlimDto } from '../user/user.slim-dto';

export interface FriendDto {
  id: string;
  user: UserSlimDto;
  userId: string;
}
