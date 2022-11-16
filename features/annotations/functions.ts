const add = (a: number, b: number): number => {
  return a + b;
} 

// Type inference
//
// Compare this snippet from features/annotations/variables.ts:
//
// const add = (a: number, b: number): number => {
//   return a + b;
// }
//
// const subtract = (a: number, b: number) => {
//   a - b;
// }

// Arrow notation
const subtract = (a: number, b: number): number => {
    return a - b;
  }

  // Named notation
function divide(a: number, b: number): number {
  return a / b;
}

// Anonymous notation
const multiply = function(a: number, b: number): number {
  return a * b;
}

// Void and Never
const logger = (message: string): void => {
  console.log(message);
  return undefined;
}

const throwError = (message: string): never => {
  throw new Error(message);
}

// Destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({ date, weather }: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
}

