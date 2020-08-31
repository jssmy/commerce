export class Helper {
    public static cookie = {
        menu: '_menu'
    };

    public static shortName(value: string, max: number = 30) {
      return value.length > max ? `${value.substring(0, max)}...` : value;
    }

}
