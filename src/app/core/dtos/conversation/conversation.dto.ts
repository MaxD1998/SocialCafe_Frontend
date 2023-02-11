import { ConversationMemberDto } from '../conversation-member/conversation-member.dto';
import { MessageDto } from '../message/message.dto';
import { ConversationInputDto } from './conversation.input-dto';

export interface ConversationDto extends ConversationInputDto {
    id: number,
    
    message: MessageDto;
    conversationMembers: ConversationMemberDto[];
}
