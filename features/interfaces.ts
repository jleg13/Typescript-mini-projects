//interfaces + types = how to get really flexible code/ reusable

// Creates a new type, describing the property names and value types of an object

// interface Reportable {
//   summary(): string;
// }

//
// OBJECT LITERAL
//
const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

printVehicle(oldCivic);

// Problem: the type annotation is so long!!!!

// Solution: use an interface (like an object literal)

interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic2 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
}

printVehicle2(oldCivic2);

// What if we only access a few properties of the object?

// Solution more generic interface

interface Reportable {
  summary(): string;
}

const oldCivic3 = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
 console.log(item.summary());
}

printSummary(oldCivic3);

const fizzy_drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

printSummary(fizzy_drink);

//
// GENERICS
//

// Interface as a 'gatekeeper '
// general strategy for reusable code in TS
// 1) Create functions that accept arguments that are typed with interfaces
// 2) Objects/classes can decide to 'implement' a given interface to work with a function

// Object 1 (implements 'XYZ')-------|
//                                   |----> interface XYZ
// Object 2 (implements 'XYZ')-------|            |
//                                                |
//                                                |
//                                                |
//                                some function that accepts XYZ as param