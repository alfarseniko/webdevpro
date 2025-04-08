class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `this ${this.model} is from ${this.make}`;
  }
}

let camry = new Vehicle(2001, "Toyota Camry");
console.log(camry.start());
