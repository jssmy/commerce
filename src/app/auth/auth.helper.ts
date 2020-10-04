import * as e from 'express';
// import { Buffer } from 'safe-buffer';
import { CookieHelper } from '../shared/commons/helpers/cookie-helper';
import { IAuthUser } from '../shared/commons/interfaces/auth/iauth-user';
import { ILoginResponse } from '../shared/commons/interfaces/auth/login-response';
interface IAutorization {
  user: IAuthUser;
  accessToken: string;
  expiresIn: number;
}
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

  private static autorization(): IAutorization {
    const encode: ILoginResponse        = JSON.parse(CookieHelper.get(this.userToken));
    const autorization                  = atob(encode.autorization);
    const au: IAutorization             = JSON.parse(autorization);
    return au;
  }

  public static user(): IAuthUser {
    return this.autorization().user;
  }

  public static token(): string {
    return this.autorization().accessToken;
  }

}
