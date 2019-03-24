/*
  Using the .map() method, return a new array with `numbers` multiplied by 100
  Write multiple solutions using different syntax (as shown in the README)
*/

// Complete this function -->
// function multiplyBy100(numbers) {
//   return numbers * 100;
// }

var numbers = [1, 2, 3];
var multiplyBy100 = numbers.map(number => {
  return number * 100;
});

console.log(multiplyBy100);

// DEBUG
// Debug your function by
// - calling it with some sample input
// - logging the output to the console

module.exports = { multiplyBy100 };
