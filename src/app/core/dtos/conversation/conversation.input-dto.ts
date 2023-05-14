import { ConversationMemberInputDto } from '../conversation-member/conversation-member.input-dto';
import { ConversationBaseDto } from './conversation.base-dto';

export interface ConversationInputDto extends ConversationBaseDto {
  conversationMembers: ConversationMemberInputDto[];
}
