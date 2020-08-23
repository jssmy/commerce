import * as moment from 'moment';

export class DateHelper {
  public static current(): Date {
    return moment().toDate();
  }
}
