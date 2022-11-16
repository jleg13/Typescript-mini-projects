// Tuples
// Array-like structure where each element
// represents some property of a record vs array which
// is a collection of records

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// order doesn't matter
const pepsi = ["brown", true, 40];

// order matters
const pepsi1: [string, boolean, number] = ["brown", true, 40];

// Type alias
type Drink = [string, boolean, number];

const pepsi2: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// Why tuples?
// 1) We can use tuples to represent a row in a spreadsheet
// 2) We can use tuples to represent a record in a database

// BUT
const carSpecs: [number, number] = [400, 3354]; // tuples limit knowledge of what is in the array

// clearer in object
const carStats = {
  horsepower: 400,
  weight: 3354,
};


