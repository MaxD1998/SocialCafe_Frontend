import { UserSlimDto } from '../user/user.slim-dto';
import { PostInputDto } from './post.input-dto';

export interface PostDto extends PostInputDto {
    id: number;
    user: UserSlimDto
}
