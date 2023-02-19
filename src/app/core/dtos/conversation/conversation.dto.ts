import { ConversationMemberDto } from '../conversation-member/conversation-member.dto';
import { MessageDto } from '../message/message.dto';
import { ConversationBaseDto } from './conversation.base-dto';

export interface ConversationDto extends ConversationBaseDto {
    id: number,
    
    message: MessageDto;
    conversationMembers: ConversationMemberDto[];
}
