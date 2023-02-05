import { ConversationMemberDto } from '../conversation-member/conversation-member.dto';
import { MessageDto } from '../message/message.dto';
import { ConversationInputDto } from './conversation.input-dto';

export interface ConversationDto extends ConversationInputDto {
    id: number,
    isActive: boolean,

    message: MessageDto;
    
    conversationMembers: ConversationMemberDto[];
}
