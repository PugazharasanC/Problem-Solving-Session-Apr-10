// ? Day 6: Sorting Algorithms
// * Session Focus: Understanding and implementing various sorting algorithms.
// ? Session Practice Questions:
// ! Implement bubble sort
function bubbleSort(arr = []) {
  console.log(arr);
  for (let itr = 0; itr < arr.length; itr++) {
    let isSorted = true;
    for (let ind = 0; ind < arr.length - 1; ind++) {
      if (arr[ind] > arr[ind + 1]) {
        isSorted = false;
        let temp = arr[ind];
        arr[ind] = arr[ind + 1];
        arr[ind + 1] = temp;
        console.log(arr);
      }
    }
    if (isSorted) break;
  }
}

// bubbleSort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
// ! Implement selection sort
function selectionSort(arr = []) {
  console.log(arr);
  for (let itr = 0; itr < arr.length; itr++) {
    let min = itr;
    for (let ind = min + 1; ind < arr.length; ind++) {
      if (arr[ind] < arr[min]) {
        min = ind;
      }
    }
    if (itr != min) {
      let temp = arr[itr];
      arr[itr] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(arr);
}
// selectionSort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
// ! Implement insertion sort
function insertionSort(arr = []) {
  console.log(arr);
  /*
    ! Break Till 11.40
    */
  for (let ind = 1; ind < arr.length; ind++) {
    let val = arr[ind];
    let ind1 = ind - 1;

    while (ind1 >= 0 && arr[ind1] > val) {
      arr[ind1 + 1] = arr[ind1];
      ind1--;
    }
    arr[ind1 + 1] = val;
  }
  console.log(arr);
}
// insertionSort(Array.from({ length: 5 }, () => Math.floor(Math.random() * 10)));
// ! Sort an array of objects based on a specific property
function sort(arr = [], key = "") {
  console.log(arr, key);
  arr = arr.sort((a, b) => {
    if (a[key] == undefined) return 1;
    if (b[key] == undefined) return -1;
    if (a[key] < b[key]) return -1;
    return 1;
  });
  console.log(arr);
}
// sort(
//   [
//     { name: "Alice", age: 30 },
//     { name: "Bob" },
//     { name: "Charlie", age: 25 },
//     { name: "David", age: 30 },
//   ],
//   "age"
// );
// ! Sort an array of 0s, 1s, and 2s (Dutch National Flag problem)
function dutchNationalFlagAlgo(arr = []) {
  let start = 0;
  let mid = 0;
  let end = arr.length - 1;
  while (mid <= end) {
    if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      [arr[start], arr[mid]] = [arr[mid], arr[start]];
      mid++;
      start++;
    } else {
      [arr[end], arr[mid]] = [arr[mid], arr[end]];

      end--;
    }
  }
}
const arr = Array.from({ length: 15 }, () => Math.floor(Math.random() * 3));
dutchNationalFlagAlgo(arr);
// console.log(arr);

// ! Find the median of a sorted array
function median(arr = []) {
  return arr.length % 2 == 0
    ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2
    : arr[Math.floor(arr.length / 2)];
}
console.log(median(arr));
// ! Sort an array of strings by their lengths
function sortByLength(arr = []) {
  console.log(arr);
  for (let itr = 0; itr < arr.length; itr++) {
    let min = itr;
    for (let ind = min + 1; ind < arr.length; ind++) {
      if (arr[ind].length < arr[min].length) {
        min = ind;
      }
    }
    if (itr != min) {
      let temp = arr[itr];
      arr[itr] = arr[min];
      arr[min] = temp;
    }
  }
  console.log(arr);
}
// ? Post-Session Practice Questions:
// todo Implement merge sort
// todo Implement quicksort
// todo Implement counting sort for a range of integers
// todo Sort an array according to the order defined by another array
// todo Sort an array of integers by frequency of elements
// todo Sort a nearly sorted array efficiently
// todo Sort an array containing only 0s and 1s
// todo Find the kth largest element in an array
// todo Implement bucket sort for decimals between 0 and 1
// todo Sort an array with three types of elements (negative, zero, positive)
