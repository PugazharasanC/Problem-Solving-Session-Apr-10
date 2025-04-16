//? Day 4: Arrays & Array Manipulations
//* Session Focus: Array creation, traversal, and manipulation techniques.
//? Session Practice Questions:
// ! Find the maximum and minimum elements in an array
function maxAndMin(arr = [-5, -6, -2, -8, -12]) {
  console.log(arr);
  if (arr.length == 0) return [null, null];
  let max = arr[0];
  let min = arr[0];
  for (let ind = 1; ind < arr.length; ind++) {
    if (max < arr[ind]) {
      max = arr[ind];
    }
    if (min > arr[ind]) {
      min = arr[ind];
    }
  }
  return [max, min];
}
// console.log(maxAndMin());
// console.log(maxAndMin([]));
// console.log(
//   maxAndMin(Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)))
// );
// ! Sort an array of integers (using built-in methods and manual implementation)
function sortArray(arr) {
  //   console.log(arr);
  //   arr.sort((num1, num2) => num1 - num2);
  console.log(arr);
  //   let arr = [5, 3, 6, 1];
  for (
    let itr = 0;
    itr < arr.length;
    itr++ // bubble sort
  )
    for (let ind = 1; ind < arr.length; ind++)
      if (arr[ind - 1] > arr[ind]) {
        let temp = arr[ind - 1];
        arr[ind - 1] = arr[ind];
        arr[ind] = temp;
      }
  console.log(arr);
}
// console.log(
//   sortArray(Array.from({ length: 15 }, () => Math.floor(Math.random() * 100)))
// );
// ! Calculate the sum and product of elements in an array
function sumAndProduct(arr) {
  console.log(arr);
  let sum = 0,
    product = 1;

  for (let ind = 0; ind < arr.length; ind++) {
    let val = arr[ind];
    sum += val;
    product *= val;
  }
  const res1 = { sum, product };

  const res2 = arr.reduce(
    (accum, val) => ({
      sum: accum.sum + val,
      product: accum.product * val,
    }),
    { sum: 0, product: 1 }
  );
  console.log(res1);
  console.log(res2);
}

// console.log(
//   sumAndProduct(
// Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
//   )
// );
// ! Find the second-largest element in an array
function secLargestElement(arr = []) {
  // [5,5,5,5,5,4,4,3,2,1] => 4
  console.log(arr);
  let max = arr[0];
  let secMax = -Infinity;
  for (let ind = 0; ind < arr.length; ind++) {
    if (max < arr[ind]) {
      secMax = max;
      max = arr[ind];
    } else if (secMax < arr[ind] && max != arr[ind]) {
      secMax = arr[ind];
    }
  }
  return secMax == -Infinity ? null : secMax;
}
// console.log(
//   secLargestElement(
//     Array.from({ length: 10 }, () => Math.floor(Math.random() * 27-7645))
//   )
// );
// ! Find the number of occurrences of an element in an array
function linearSearch(arr = [], target) {
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == target) return ind;
  }
  return -1;
}
function countOccurences(arr = [], target) {
  console.log(arr);
  console.log(target);
  let count = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == target) count++;
  }
  return count;
}

// console.log(
//   countOccurences(
//     Array.from({ length: 100 }, () => Math.floor(Math.random() * 50)),
//     Math.floor(Math.random() * 50)
//   )
// );
// ! Rotate an array by k positions
function rotate(arr) {
  arr.push(arr.shift());
}
function rotateArray(arr = [], k = 0) {
  console.log(arr, k);
  k = k % arr.length;
  while (k--) {
    rotate(arr);
  }
  return arr;
}
// console.log(
//   rotateArray(
//     Array.from({ length: 5 }, (_, i) => i + 1),
//     760000007
//   )
// );
// ! Remove duplicates from an array
function removeDuplicates(arr = []) {
  console.log(arr);
  for (let ind = 0; ind < arr.length; ind++) {
    let val = arr[ind];
    if (val != undefined) {
      for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
        if (arr[ind1] == val) {
          delete arr[ind1];
        }
      }
    }
  }
  console.log(arr);
  return arr.filter((val) => undefined!==val);
  return Object.keys(
    arr.reduce((accum, val) => ({ ...accum, [val]: 1 }), {})
  ).map(Number);
  return arr.filter((val, ind) => arr.indexOf(val) == ind);
  return [...new Set(arr)];
}
console.log(
  removeDuplicates(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 5))
  )
);

// todo Post-Session Practice Questions:
// todo Merge two sorted arrays (very very imp) (MERGE SORT) (LINKED LIST)
// todo Find the missing number in an array of consecutive integers
// todo Find the equilibrium index of an array
// todo Check if an array is a palindrome
// todo Find pairs in an array with a given sum
// todo Find the maximum subarray sum (Kadane's algorithm)
// todo Find the intersection and union of two arrays
// todo Move all zeros to the end of an array
// todo Find the majority element in an array
// todo Find the smallest positive missing number in an array
