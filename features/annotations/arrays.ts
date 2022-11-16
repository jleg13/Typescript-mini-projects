const carMakers : string[] = [];
// 
// but don't need it if inital values are provided
//
const carMakers2 = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

// 2D array
const carsByMake = [
  ["f150"],
  ["corolla"],
  ["camaro"],
];

let carColors : string[][] = [];

// Help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];

importantDates.push("2030-10-10");
importantDates.push(new Date());

// When TO use array annotations
// 1) When we need to initialize an empty array
const carMakers3: string[] = [];

// 2) When we need to initialize an array with
// different types
const importantDates2: (Date | string)[] = [new Date()];
importantDates2.push("2030-10-10");
importantDates2.push(new Date());

// 3) When we want a 2D array
const carColors2: string[][] = [];
carColors2.push(["red"]);
carColors2.push(["green"]);
carColors2.push(["blue"]);



