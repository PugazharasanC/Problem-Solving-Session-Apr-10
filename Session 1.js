// ? Day 1: Problem-Solving Fundamentals
// * Session Focus: Breaking down problems systematically and implementing basic algorithmic solutions.
// ? Session Practice Questions:
// ! Determine if a number is positive, negative, or zero
function solve(num = 0) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
// ! Identify the maximum and minimum of three numbers
function max(num1, num2) {
  return num1 >= num2 ? num1 : num2;
}
function min(num1, num2) {
  return num1 <= num2 ? num1 : num2;
}
function minAndMax(num1, num2, num3) {
  //   let max = -Infinity;
  //   if (num1 >= num2 && num1 >= num3) {
  //     max = num1;
  //   } else if (num2 >= num3) {
  //     max = num2;
  //   } else {
  //     max = num3;
  //   }
  //   let min = +Infinity;
  //   if (num1 <= num2 && num1 <= num3) {
  //     min = num1;
  //   } else if (num2 <= num3) {
  //     min = num2;
  //   } else {
  //     min = num3;
  //   }
  const maximum = max(max(num1, num2), num3);
  const minimum = min(min(num1, num2), num3);
  const middle = num1 + num2 + num3 - maximum - minimum;
  return [maximum, middle, minimum];
}

// console.log(minAndMax(-2, -5, -3));
// console.log(minAndMax(2, 5, 3));
// console.log(minAndMax(2, -5, 3));
// ! Find the sum and difference of two integers
function sumAndDiff(num1, num2) {
  return {
    sum: num1 + num2,
    diff: num1 - num2,
  };
}
// ! Count the number of digits in a number
function countDigits(num) {
  if (num < 0) return countDigits(-num);

  if (num < 10) return 1;

//   console.log(num, 1 + Math.floor(Math.log10(num)));
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
// console.log(countDigits(12145));
// console.log(countDigits(-386143753847));
// console.log(countDigits(0));
// Check if a number is even or odd
// todo Post-Session Practice Questions:
// todo Check if a string contains only alphabets
// todo Calculate the area and perimeter of basic shapes (circle, rectangle)
// todo Calculate the average of an array of numbers
// todo Convert temperature between Celsius and Fahrenheit
// todo Find the largest of four numbers
// todo Count the number of vowels and consonants in a string
// todo Calculate the power of a number
// todo Determine if a character is uppercase, lowercase, or not a letter
// todo Reverse a string without using built-in reverse functions
// todo Calculate the sum of digits in a number
// todo Check if a number is divisible by another number
// todo Determine if a year is a leap year
