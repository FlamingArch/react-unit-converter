class Volume {
  liters = 0;

  setValues(unit: string, val: number) {
    switch (unit.toLowerCase()) {
      case "liters":
        this.liters = val;
        break;
      case "milliliters":
        this.liters = val / 1000;
        break;
      case "cubicmeters":
        this.liters = val * 1000;
        break;
      case "cubicinches":
        this.liters = val * 0.0163871;
        break;
      case "cubicfeet":
        this.liters = val * 28.3168;
        break;
      case "cubicyards":
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
      case "cubicmeters":
        return this.liters / 1000;
      case "cubicinches":
        return this.liters / 0.0163871;
      case "cubicfeet":
        return this.liters / 28.3168;
      case "cubicyards":
        return this.liters / 764.554858;
    }
  }
}
