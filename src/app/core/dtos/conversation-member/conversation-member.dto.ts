import { UserSlimDto } from '../user/user.slim-dto';
import { ConversationMemberInputDto } from './conversation-member.input-dto';

export interface ConversationMemberDto extends ConversationMemberInputDto {
  id: string;
  user: UserSlimDto;
}
