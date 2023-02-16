import { UserSlimDto } from '../user/user.slim-dto';

export interface FriendDto {
    id: number;
    user: UserSlimDto
    userId: number;
}
