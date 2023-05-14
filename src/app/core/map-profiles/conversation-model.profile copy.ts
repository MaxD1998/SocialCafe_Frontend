import { ConversationModel } from '../models/conversations/conversation.model';

export class ConversationModelProfile {
  static mapToConversationModel(input: ConversationModel): ConversationModel {
    return input
      ? {
          conversationMembers: input.conversationMembers,
          isActive: input.isActive,
          id: input.id,
          message: input.message,
          name: input.name,
        }
      : null;
  }
}
