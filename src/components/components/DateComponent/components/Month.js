// @flow

import { PureComponent } from "react";

const monthOptions = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Ноябрь",
  "Декабрь"
].map((month: string, i: number) => ({
  label: month,
  value: String(i + 1)
}));

const options = [
  {
    label: "Каждый месяц",
    value: "*"
  }
].concat(monthOptions);

export default class Month extends PureComponent {
  static getOptions() {
    return options;
  }

  static className: string = "Month";
}
