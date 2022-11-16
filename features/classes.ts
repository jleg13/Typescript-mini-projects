// Class - Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'
//
// Object - An instance of a class
//

class Vehicle1 {
  protected drive(): void {
    console.log("chugga chugga");
  }
  private honk(): void {
    console.log("beep");
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle1();
// vehicle.drive();
vehicle.startDrivingProcess();

// Inheritance

class Motorbike extends Vehicle1 {
  //Override the drive method
  protected drive(): void {
    console.log("vroom");
  }
  public startDrivingProcess(): void {
    this.drive();
    // this.honk(); // NOT accessible in clid class
  }
}

const motorbike = new Motorbike();
motorbike.startDrivingProcess();

// Modifiers
// key word that describes the accessibility of a member of a class
// public - this method can be called anywhere, any time
// private - this method can only be called by other methods in this class
// protected - this method can be called by other methods in this class, or by other methods in child classes

// Fields

class Vehicle2 {
  // color: string = "red"; // default value
  // color: string;

  // constructor(color: string) {
  //   this.color = color;
  // }

  // shorhand constructor assigns instance variables using public/private/protected modifiers
  constructor(public color: string) {}

  protected drive(): void {
    console.log("chugga chugga");
  }
  private honk(): void {
    console.log("beep");
  }
  public startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle1 = new Vehicle2("orange");
console.log(vehicle1.color);

class Tractor extends Vehicle2 {
  // color has been inherited from Vehicle1 so no modifier is needed
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const tractor = new Tractor(10, "blue");