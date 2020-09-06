import * as moment from 'moment';
const CALENDAR_MONTHS = {
  1 : 'enero',
  2: 'febrero',
  3: 'marzo',
  4: 'abril',
  5: 'mayo',
  6: 'junio',
  7: 'julio',
  8: 'agosto',
  9: 'setiembre',
  10: 'octubre',
  11: 'noviembre',
  12: 'diciembre'
};
export class DateHelper {
  public static current(): Date {
    return moment().toDate();
  }

  public static unixToDate(unix: number): Date {
    return moment(unix).toDate();
  }

  public static unixToHumanDate(unix: number): string {
    const dated: Date = this.unixToDate(unix);
    return `${dated.getDay()} ${CALENDAR_MONTHS[dated.getMonth()]} del ${dated.getFullYear()}`;
  }

  public static dateAgoDays(unix: number, maxDay: number = 15) {
    const endDay = this.unixToDate(unix);
    const days: number = moment().diff(endDay, 'days');
    if (days > maxDay)  {
      return this.unixToHumanDate(unix);
    } else if (days === 0) {
      return `hoy`;
    } else {
      return `hace ${days} días`;
    }
  }
}
