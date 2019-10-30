// @flow

import { PureComponent } from "react";

const weekDaysOptions = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье"
].map((day: string, i: number) => ({
  label: day,
  value: String(i + 1)
}));

const options = [
  {
    label: "каждый день",
    value: "*"
  },
  {
    label: "Будни",
    value: "1-5"
  },
  {
    label: "Выходные",
    value: "6-7"
  }
].concat(weekDaysOptions);

export default class DayOfWeek extends PureComponent {
  static getOptions() {
    return options;
  }

  static className: string = "DayOfWeek";
}
