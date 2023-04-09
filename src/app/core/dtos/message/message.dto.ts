import { UserSlimDto } from '../user/user.slim-dto';
import { MessageInputDto } from './message.input-dto';

export interface MessageDto extends MessageInputDto {
    id: string;
    user: UserSlimDto;
}