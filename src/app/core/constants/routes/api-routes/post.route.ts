export class PostRoute {
  private static readonly base = 'Post/';

  static readonly create = this.base;
  static readonly getsUserId = this.base + 'UserId/';
  static readonly getsUserAndUserFriendsByUserId = this.base + 'UserAndUserFriends/UserId/';
}
