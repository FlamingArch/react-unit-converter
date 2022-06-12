import _ from "lodash"

export default class Lengths {
  private meters = 0;

  units = ["meters", "centimeters", "kilometers", "miles", "inches", "yards"]

  constructor() { }

  setValues(unit: string, val: number) {
    switch (_.lowerCase(unit)) {
      case "meters":
        this.meters = val;
        break;
      case "centimeters":
        this.meters = val / 100;
        break;
      case "kilometers":
        this.meters = val * 1000;
        break;
      case "miles":
        this.meters = val * 1609.344;
        break;
      case "inches":
        this.meters = val * 0.0254;
        break;
      case "yards":
        this.meters = val * 0.9144;
        break;
    }
  }

  getValues(unit: string) {
    switch (_.lowerCase(unit)) {
      case "meters":
        return this.meters;
      case "centimeters":
        return this.meters * 100;
      case "kilometers":
        return this.meters / 1000;
      case "miles":
        return this.meters / 1609.344;
      case "inches":
        return this.meters / 0.0254;
      case "yards":
        return this.meters / 0.9144;
    }
  }

  convertValue = (val: number, in_unit: string, out_unit: string) => {
    this.setValues(in_unit, val);
    return this.getValues(out_unit);
  }
}
