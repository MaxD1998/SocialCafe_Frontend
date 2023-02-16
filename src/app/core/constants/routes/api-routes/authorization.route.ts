export class AuthorizationRoute {
    private static readonly base = "Authorization/";

    static readonly login = this.base + "Login";
    static readonly refreshToken = this.base + "RefreshToken";
    static readonly register = this.base + "Register";
}
