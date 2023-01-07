import { UserSlimDto } from '../user/user.slim-dto';
import { FriendInputDto } from './friend.input-dto';

export interface FriendDto extends FriendInputDto {
    id: number;
    friendId: number;
    user: UserSlimDto
}
