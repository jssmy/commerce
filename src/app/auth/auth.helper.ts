import { CookieHelper } from '../shared/commons/helpers/cookie-helper';

export class Auth {
  public static userToken = 'provider';
  /**
   * check auth session is valid
   */
  public static check(): boolean {
    return CookieHelper.check(this.userToken);
  }

  public static user() {}

}
