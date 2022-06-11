export default class Area {
  private metersq = 0;

  units = ["meter-square", "centimeter-square", "kilometer-square", "mile-square", "inches-square", "yards-square"]

  constructor() { }

  setValue(unit: string, val: number) {
    switch (unit.toLowerCase()) {
      case "meter-square":
        this.metersq = val;
        break;
      case "centimeter-square":
        this.metersq = val / 100;
        break;
      case "kilometer-square":
        this.metersq = val * 1000000;
        break;
      case "mile-square":
        this.metersq = val * 2589988.110336;
        break;
      case "inches-square":
        this.metersq = val * 0.00064516;
        break;
      case "yards-square":
        this.metersq = val * 0.83612736;
        break;
    }
  }

  getValue(unit: string) {
    switch (unit.toLowerCase()) {
      case "meter-square":
        return this.metersq;
      case "centimeter-square":
        return this.metersq * 100;
      case "kilometer-square":
        return this.metersq / 1000000;
      case "mile-square":
        return this.metersq / 2589988.110336;
      case "inches-square":
        return this.metersq / 0.00064516;
      case "yards-square":
        return this.metersq / 0.83612736;
    }
  }
}
