export class CookieHelper {
    public static expire = 360;
    public static set(key: string,value: any,expireDays?: number): boolean {
        expireDays = expireDays ? expireDays :  this.expire
        const today = new Date();
        today.setTime(today.getTime() + (expireDays * 24 * 60 * 60 * 1000));
        const expires = "expires="+today.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
        return true;
      }

    public static get(key: string): any {
        const name = key + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return false;
    }

    public static delete(key: string): boolean {
        return this.set(key,'', -1);
    }

    public static remove(key: string): boolean {
        return this.set(key,'', -1);
    }
}
