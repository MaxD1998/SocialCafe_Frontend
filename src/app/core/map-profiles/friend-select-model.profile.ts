import { ConversationMemberDto } from '../dtos/conversation-member/conversation-member.dto';
import { GuidHelper } from '../helpers/guid.helper';
import { FriendSelectModel } from '../models/friends/friend.select-model';

export class FriendSelectModelProfile {
  static mapToConversationMemberDto(input: FriendSelectModel): ConversationMemberDto {
    const nameArray = input.username.split(' ');
    return input
      ? {
          id: null,
          conversationId: GuidHelper.empty,
          userId: input.userid,
          nick: null,
          user: {
            id: input.userid,
            firstName: nameArray.length > 0 ? nameArray[0] : '',
            lastName: nameArray.length > 1 ? nameArray[1] : '',
          },
        }
      : null;
  }
}
