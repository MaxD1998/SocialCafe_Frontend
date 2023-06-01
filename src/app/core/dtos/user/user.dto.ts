import { UserSlimDto } from './user.slim-dto';

export interface UserDto extends UserSlimDto {
  email: string;
}
