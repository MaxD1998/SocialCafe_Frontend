import { FriendDto } from '../dtos/friend/friend.dto';
import { FriendModel } from '../models/friends/friend.model';

export class FriendDtoProfile {
    static mapToFriendModel(input: FriendDto): FriendModel {
        return input ? {
            id: input.id,
            userid: input.userId,
            username: `${input.user.firstName} ${input.user?.lastName}`
        } : null
    }
}
