import { CookieHelper } from '../shared/commons/helpers/cookie-helper';
import { IAuthUser } from '../shared/commons/interfaces/auth/iauth-user';
import { OAuth } from '../shared/commons/interfaces/auth/ioauth';
import { ILoginResponse } from '../shared/commons/interfaces/auth/login-response';
export class Auth {
  private static userToken = 'provider';
  /**
   * check auth session is valid
   */
  public static check(): boolean {
    return CookieHelper.check(this.userToken);
  }

  public static save(autorization: ILoginResponse): void{
    CookieHelper.set(this.userToken, JSON.stringify(autorization));
  }

  private static autorization(): OAuth {
    const auth: OAuth        = JSON.parse(CookieHelper.get(this.userToken));
    return auth;
  }

  public static user(): IAuthUser {
    const meta = atob(this.autorization().meta_data);
    const user: IAuthUser = JSON.parse(meta);
    return user;
  }

  public static token(): string {
    return this.autorization().access_token;
  }

  public static refreshToken(): string {
    return this.autorization().refresh_token;
  }

}
