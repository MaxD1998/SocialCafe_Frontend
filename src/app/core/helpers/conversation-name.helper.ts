import { ConversationDto } from '../dtos/conversation/conversation.dto';

export class ConversationNameHelper {
  static setName(dto: ConversationDto, userId: string): string {
    if (dto.name !== null && dto.name !== '') {
      return dto.name;
    }

    if (dto.conversationMembers.length > 0) {
      let conversationMembers =
        dto.conversationMembers.length > 1
          ? dto.conversationMembers.filter(x => x.userId != userId)
          : dto.conversationMembers;

      return conversationMembers.map(x => `${x.user.firstName} ${x.user.lastName}`).join(', ');
    }

    return dto.name;
  }
}
