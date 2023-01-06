import { UserDto } from './user-dto';

export interface ConversationMemberDto {
    id: number,
    conversationId: number,
    userId: number,
    user: UserDto
    nick: string

}
