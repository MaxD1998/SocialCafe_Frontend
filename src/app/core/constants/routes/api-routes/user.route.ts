export class UserRoute {
  private static readonly base = 'User/';

  static readonly getById = this.base;
  static readonly getsNamesExceptUserFriends = this.base + 'NamesExceptUserFriends/';
  static readonly update = this.base;
}
