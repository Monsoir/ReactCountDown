export default class DateHelper {

  static millisecondsInADay = 1000 * 60 * 60 * 24;
  static daysInAWeek = 7;

  /**
   * 获取两个时间之间的间隔
   * @param {*开始时间} startDate
   * @param {*结束时间} endDate
   */
  static timeInterval(startDate, endDate) {
    if (startDate && endDate) {
      return endDate.getTime() - startDate.getTime();
    }

    return 0;
  }

  /**
   * 将时间间隔转化为 [日, 时, 分, 秒]
   * @param {*时间间隔，单位为毫秒} timeInterval
   */
  static prettifyTimeInterval(timeInterval) {
    const truncatedSeconds = Math.trunc(timeInterval / 1000);
    const seconds = truncatedSeconds % 60;
    const minutes = Math.trunc(truncatedSeconds / 60) % 60;
    const hours = Math.trunc(truncatedSeconds / 60 / 60) % 24;
    const days = Math.trunc(truncatedSeconds / 60 / 60 / 24);

    return [days, hours, minutes, seconds];
  }

  /**
   * 从今天开始到结束日期的时间间隔转化为 [日, 时, 分, 秒]
   * @param {*结束日期} endDate
   */
  static prettifyTimeIntervalStartFromNow(endDate) {
    const timeInterval = this.timeInterval(new Date(), endDate);
    return this.prettifyTimeInterval(timeInterval);
  }
}
