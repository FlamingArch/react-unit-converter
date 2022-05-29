class Area {
  metersq = 0;

  setValue(unit: string, val: number) {
    switch (unit.toLowerCase()) {
      case "metersq":
        this.metersq = val;
        break;
      case "centimetersq":
        this.metersq = val / 100;
        break;
      case "kilometersq":
        this.metersq = val * 1000000;
        break;
      case "milesq":
        this.metersq = val * 2589988.110336;
        break;
      case "inchessq":
        this.metersq = val * 0.00064516;
        break;
      case "yardssq":
        this.metersq = val * 0.83612736;
        break;
    }
  }

  getValue(unit: string) {
    switch (unit.toLowerCase()) {
      case "metersq":
        return this.metersq;
      case "centimetersq":
        return this.metersq * 100;
      case "kilometersq":
        return this.metersq / 1000000;
      case "milesq":
        return this.metersq / 2589988.110336;
      case "inchessq":
        return this.metersq / 0.00064516;
      case "yardssq":
        return this.metersq / 0.83612736;
    }
  }
}
