//Write a function to split a string and convert it into an array of words.
function stringToArray(string) {

  const newString = string.split(' ');
  console.log(newString);

}

stringToArray('Reza Salemi');

// Question : Given an array of integers as strings and numbers,
// return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x) {
  let numbers = [];
  for (let i = 0; i < x.length; i++) {
    numbers.push(Number(x[i]));
  }
  let sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);
  return sum;
}

sumMix([12, 5, '3']);

//You were camping with your friends far away from home, but when it's time to go back,
// you realize that your fuel is running out and the nearest pump is 50 miles away!
// You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
// Considering these factors, write a function that tells you if it is possible to get to the pump or not.
// Function should return true if it is possible and false if not.
const zeroFuel = (distanceToPump, mpg, fuelLeft) => (distanceToPump <= (mpg * fuelLeft)) ? true : false;

//Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.
//invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]

function invert(array) {
  let newArray = [];
  for (const element of array) {
    let number = (element >= 0) ? element * -1 : Math.abs(element);
    newArray.push(number);
  }
  return newArray;
}

const countSheeps = (arrayOfSheep) => arrayOfSheep.filter(value => value).length;

// const array = [true, true, true, false,
//   true, true, true, true,
//   true, false, true, false,
//   true, false, false, true,
//   true, true, true, true,
//   false, false, true, true];
// countSheeps(array);

//Create a function with two arguments that will return an array of the first (n)
// multiples of (x).
// Assume both the given number and the number of times to count will be
// positive numbers greater than 0.
// Return the results as an array (or list in Python, Haskell or Elixir).
//Example
//countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  console.log(z);
}
countBy(2, 5);

//In this simple assignment you are given a number and have
// to make it negative. But maybe the number is already negative?

const makeNegative = (num) => (num < 0) ? num : num * -1;

//Write a function which calculates the average of the numbers in a given list.
function find_average(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array.reduce((prev, current) => (prev + current)) / array.length;
  }
}
console.log(find_average([1, 2, 3]));