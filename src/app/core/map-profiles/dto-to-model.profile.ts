import { ConversationDto } from '../dtos/conversation/conversation.dto';
import { ConversationModel } from '../models/conversations/conversation.model';

export class DtoToModelProfile {
    static mapConversationDtoToConversationModel(input: ConversationDto): ConversationModel {
        return input !== null ? {
            conversationMembers: input.conversationMembers,
            isActive: false,
            id: input.id,
            message: input.message,
            name: input.name
        } : null
    }
}
