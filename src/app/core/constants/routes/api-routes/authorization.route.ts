export class AuthorizationRoute {
    private static readonly base = "Authorization/";

    static readonly login = this.base + "Login/";
    static readonly logout = this.base + "Logout/";
    static readonly refreshToken = this.base + "RefreshToken/";
    static readonly register = this.base + "Register/";
}
