import { ConversationMemberDto } from '../dtos/conversation-member/conversation-member.dto';
import { FriendSelectModel } from '../models/friends/friend.select-model';

export class FriendSelectModelProfile {
    static mapToConversationMemberDto(input: FriendSelectModel): ConversationMemberDto {
        const nameArray = input.username.split(" ");
        return input ? {
            id: 0,
            conversationId: 0,
            userId: input.userid,
            nick: null,
            user: {
                id: input.userid,
                firstName: nameArray.length > 0 ? nameArray[0] : "",
                lastName: nameArray.length > 1 ? nameArray[1] : ""
            }
        } : null
    }
}
