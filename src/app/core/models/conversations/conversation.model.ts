import { ConversationDto } from '../../dtos/conversation/conversation.dto';

export interface ConversationModel extends ConversationDto {
  isActive: boolean;
}
