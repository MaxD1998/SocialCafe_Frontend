import { ConversationMemberInputDto } from '../conversation-member/conversation-member.input-dto';
import { ConversationInputDto } from './conversation.input-dto';

export interface ConversationInputExtendDto extends ConversationInputDto {
    conversationMembers: ConversationMemberInputDto[];
}
