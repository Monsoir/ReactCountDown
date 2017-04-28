export default class DateStringPrettifier {
  static prettifiyDateString(dateComponents = [0, 0, 0, 0]) {
    const [days, hours, minutes, seconds] = dateComponents;
    const sdays = days < 10 ? `0${days}` : `${days}`;
    const shours = hours < 10 ? `0${hours}` : `${hours}`;
    const sminutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const sseconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return [sdays, shours, sminutes, sseconds];
  }
}
