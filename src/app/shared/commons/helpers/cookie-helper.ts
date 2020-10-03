export class CookieHelper {
    public static expire = 360;
    public static set(key: string, value: any, expireDays?: number): boolean {
        expireDays = expireDays ? expireDays :  this.expire;
        const today = new Date();
        today.setTime(today.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        const expires = 'expires=' + today.toUTCString();
        document.cookie = key + '=' + value + ';' + expires + ';path=/';
        return true;
      }

    public static get(key: string): string {
        const name = key + '=';
        const ca = document.cookie.split(';');
        for (let c of ca) {
            while (c.charAt(0) === ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return null;
    }

    public static delete(key: string): boolean {
        return this.set(key, '', -1);
    }

    public static remove(key: string): boolean {
        return this.set(key, '', -1);
    }

    public static check(key: string): boolean {
      return !! this.get(key);
    }

   public static removeAll(): boolean {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
          const eqPos = cookie.indexOf('=');
          const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
          document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
      }
      return true;
  }
}
