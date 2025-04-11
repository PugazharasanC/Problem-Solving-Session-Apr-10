//? Day 2: Mathematics & Recursion
//* Session Focus: Solving mathematical problems and understanding recursive problem-solving techniques.
//? Session Practice Questions:
//! Calculate the factorial of a number (both iterative and recursive)
// Algorithm
// * Declare a variable to store the factorial result and initialise with 1
// * Iterate from the given number to 1
// * Multiply the number with result and store it in result
// * console or print the result.

function factorialIterative(num = 0) {
  let res = 1;
  for (let itr = num; itr >= 1; itr--) {
    res *= itr;
  }
  return res;
}

function factorialRecursive(num) {
  if (num <= 1) return 1;
  return num * factorialRecursive(num - 1);
}
// console.log(factorialRecursive(5));
// console.log(factorialIterative(5));
// console.log(factorialIterative(0));
// console.log(factorialIterative(1));
// console.log(factorialIterative(10));
//! Generate the Fibonacci sequence up to N terms (both iterative and recursive)
// Algorithm
// * Declare an array to store the sequence and initalise with [0, 1]
// * Iterate a loop starts from 2 and ends in N -1
// * On each iteration, sum the last two elements of the array and push it to the array
// * console or print the entire array

function fibonacciIterative(num) {
  const res = [];
  if (num >= 1) res.push(0);
  if (num >= 2) res.push(1);
  for (let ind = 2; ind < num; ind++) {
    res.push(res[ind - 1] + res[ind - 2]);
  }
  return res;
}

function fibonacciRecursive(num) {
  if (num <= 0) return [];
  if (num == 1) return [0];
  if (num == 2) return [0, 1];
  const res = fibonacciRecursive(num - 1);
  res.push(res[res.length - 1] + res[res.length - 2]);
  return res;
}
// console.log(fibonacciIterative(10));
// console.log(fibonacciIterative(1));
// console.log(fibonacciIterative(2));
// console.log(fibonacciIterative(3));
//! Find the GCD of two numbers using Euclidean algorithm
function gcd(num1, num2) {
  while (num2 != 0) {
    let temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }
  return num1;
}
//! Check if a number is prime
function isPrime(num) {
  for (let fact = 2; fact * fact <= num; fact++) {
    if (num % fact == 0) return false;
  }
  return true;
}
// console.log(isPrime(101));
// console.log(isPrime(100));
//! Find the LCM of two numbers
function lcm(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}
//! Sum of natural numbers up to N (using recursion)

function sumOfNaturalNumbers(num) {
  if (num == 1) return 1;
  return num + sumOfNaturalNumbers(num - 1);
}
// console.log(sumOfNaturalNumbers(10));
// console.log(sumOfNaturalNumbers(9));
//! Implement a recursive function to calculate power(x, n)
function power(x, n) {
  if (n == 0) return 1;
  return x * power(x, n - 1);
}
// console.log(power(5, 3))
// todo  Post-Session Practice Questions:
// todo  Check if a number is a palindrome
// todo  Find all divisors of a number
// todo  Implement a recursive binary search
// todo  Calculate the sum of elements in an array using recursion
// todo  Implement Tower of Hanoi solution using recursion
// todo  Check if a string is a palindrome using recursion
// todo  Find the nth element in the Fibonacci sequence using recursion
// todo  Count the number of ways to reach nth stair (climbing 1 or 2 steps at a time)
// todo  Check if two numbers are coprime
// todo  Implement recursive function to reverse a string
