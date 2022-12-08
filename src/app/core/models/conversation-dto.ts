import { ConversationMemberDto } from './conversation-member-dto';
import { MessageDto } from './message-dto';

export interface ConversationDto {
    id: number,
    name: string,
    isActive: boolean,
    conversationMembers: ConversationMemberDto[];
    message: MessageDto;
}
