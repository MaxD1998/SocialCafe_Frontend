import { AuthorizeDto } from '../dtos/authorize.dto';
import { ConversationMemberDto } from '../dtos/conversation-member/conversation-member.dto';

export class AuthorizeDtoProfile {
    static mapToConversationMemberDto(input: AuthorizeDto): ConversationMemberDto {
        const nameArray = input.username.split(" ");
        return input ? {
            id: 0,
            conversationId: 0,
            userId: input.id,
            nick: null,
            user: {
                id: input.id,
                firstName: nameArray.length > 0 ? nameArray[0] : "",
                lastName: nameArray.length > 1 ? nameArray[1] : ""
            }
        } : null
    }
}