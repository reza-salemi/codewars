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