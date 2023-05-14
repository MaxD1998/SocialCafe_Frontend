import { ConversationDto } from '../dtos/conversation/conversation.dto';
import { ConversationModel } from '../models/conversations/conversation.model';

export class ConversationDtoProfile {
  static mapToConversationModel(input: ConversationDto): ConversationModel {
    return input
      ? {
          conversationMembers: input.conversationMembers,
          isActive: false,
          id: input.id,
          message: input.message,
          name: input.name,
        }
      : null;
  }
}
