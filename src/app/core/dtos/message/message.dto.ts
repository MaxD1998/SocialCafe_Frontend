import { UserSlimDto } from '../user/user.slim-dto';

export interface MessageDto {
    id: number;
    conversationId: number;
    user: UserSlimDto;
    text: string;

}