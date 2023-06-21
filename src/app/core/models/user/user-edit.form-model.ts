import { UserInputDto } from '../../dtos/user/user.input-dto';

export interface UserEditFormModel extends UserInputDto {
  repeatedPassword: string;
}
