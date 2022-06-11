export default class Volume {
  private liters = 0;

  units = ["liters", "milliliters", "cubic-meters", "cubic-inches", "cubic-feet", "cubic-yards"]

  constructor() { }

  setValues(unit: string, val: number) {
    switch (unit.toLowerCase()) {
      case "liters":
        this.liters = val;
        break;
      case "milliliters":
        this.liters = val / 1000;
        break;
      case "cubic-meters":
        this.liters = val * 1000;
        break;
      case "cubic-inches":
        this.liters = val * 0.0163871;
        break;
      case "cubic-feet":
        this.liters = val * 28.3168;
        break;
      case "cubic-yards":
        this.liters = val * 764.554858;
        break;
    }
  }

  getValues(unit: string) {
    switch (unit.toLowerCase()) {
      case "liters":
        return this.liters;
      case "milliliters":
        return this.liters * 1000;
      case "cubic-meters":
        return this.liters / 1000;
      case "cubic-inches":
        return this.liters / 0.0163871;
      case "cubic-feet":
        return this.liters / 28.3168;
      case "cubic-yards":
        return this.liters / 764.554858;
    }
  }
}
