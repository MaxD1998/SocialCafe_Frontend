export class FriendRoute {
  private static readonly base = 'Friend/';

  static readonly create = this.base;
  static readonly deleteFriendUser = this.base + 'UserFriend/';
  static readonly getUserId = this.base + 'UserId/';
}
