//? Day 10: Advanced Techniques
//* Session Focus: Two-pointer technique, sliding window, hashing, and dynamic programming.
//? Session Practice Questions:
//! Find two numbers in a sorted array that add up to a target sum (two-pointer)
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const solve = (n, nums, target) => {
    // for(let ind = 0 ; ind < nums.length ; ind ++){ //O (n**2)

    //     for(let ind1 = ind+1 ; ind1 < nums.length ; ind++){

    //         if(nums[ind] + nums[ind1] == target){
    //             return [ind + 1, ind1 + 1]
    //         }
    //     }

    // }
    //% Two Pointers algo
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[start] + nums[end];
      if (sum == target) return [start + 1, end + 1];
      if (sum < target) start++;
      else end--;
    }

    return [-1, -1];
  };
  const n = +userInput[0];
  const nums = userInput[1].split(" ").map(Number);
  const target = +userInput[2];

  console.log(solve(n, nums, target));
  //end-here
});
//! Find the longest substring without repeating characters (sliding window)
// Getting input via STDIN
// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const solve = (str) => {
    let start = 0;
    let maxLen = 0;
    const set = new Set();
    for (let ind = 0; ind < str.length; ind++) {
      while (set.has(str[ind])) {
        set.delete(str[start]);
        start++;
      }
      set.add(str[ind]);
      maxLen = Math.max(maxLen, ind - start + 1);
    }
    return maxLen;
  };

  console.log(solve(userInput[0]));

  //end-here
});
//! Find the maximum sum subarray of size k (sliding window)
// Getting input via STDIN
// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  const solve = (n, arr, k) => {
    let sum = 0;

    for (let ind = 0; ind < k; ind++) {
      sum += arr[ind];
    }

    let maxSum = sum;

    for (let ind = k; ind < n; ind++) {
      sum = sum + arr[ind] - arr[ind - k];
      maxSum = maxSum < sum ? sum : maxSum;
    }

    return maxSum;
  };

  console.log(
    solve(+userInput[0], userInput[1].split(" ").map(Number), +userInput[2])
  );

  //end-here
});
//! Find all triplets in an array that sum up to zero (two-pointer)
// Getting input via STDIN
// const readline = require("readline");

// const inp = readline.createInterface({
//   input: process.stdin
// });

// const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  const solve = (n, arr) => {
    const res = [];
    n = arr.length;
    arr.sort((a, b) => a - b);
    for (let i = 0; i < n - 2; i++) {
      if (i > 0 && arr[i] == arr[i - 1]) continue;

      let left = i + 1;
      let right = n - 1;

      while (left < right) {
        let sum = arr[i] + arr[left] + arr[right];

        if (sum == 0) {
          res.push([arr[i], arr[left], arr[right]]);
          while (left < right && arr[left] == arr[left + 1]) left++;
          while (left < right && arr[right] == arr[right - 1]) right--;
          left++;
          right--;
        } else if (sum < 0) left++;
        else right--;
      }
    }
    // console.log(arr)
    // const map = new Map()
    // for(let i = 0 ; i < n ; i++){ // O(n**2)
    //     for(let j = i+1; j < n ; j++){
    //         const remaining = -1 * (arr[i] + arr[j])
    //         if(map.has(remaining)){
    //             for(let k of map.get(remaining)){
    //                 res.push([arr[k], arr[i], arr[j]])
    //             }
    //         }
    //     }
    //     if(!map.has(arr[i])){
    //         map.set(arr[i], [])
    //     }
    //     map.get(arr[i]).push(i)
    // }
    return res;
  };
  console.log(solve(+userInput[0], userInput[1].split(" ").map(Number)));
  //end-here
});
//! Implement a hash map

class HashMap {
  constructor(size = 10937) {
    this.map = new Array(size).fill(-1);
    this.size = size;
  }
  _hash(key) {
    let hash = key % this.size;
    return hash;
  }

  put(key, value) {
    let hash = this._hash(key);
    this.map[hash] = value;
  }
  get(key) {
    let hash = this._hash(key);
    return this.map[hash];
  }
  remove(key) {
    let hash = this._hash(key);
    this.map[hash] = -1;
  }
}

//! Find the first non-repeating character in a string (hashing)
const solve = (str) => {
  const map = new Map();
  for (let char of str) {
    map.set(char, map.get(char) + 1 || 1);
  }
  for (let char of str) {
    if (map.get(char) == 1) {
      return char;
    }
  }
  return -1;
};
// console.log(solve("Prolem Solving, JavaScript Programming, enjoy".toLowerCase()));
//! Solve the "climbing stairs" problem using dynamic programming

const solveDP = n => {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  for (let ind = 2; ind <= n; ind++) {
    dp[ind] = dp[ind - 1] + dp[ind - 2];
  }
  return dp[n];
};
// todo Post-Session Practice Questions:
// todo Find the longest increasing subsequence using dynamic programming
// todo Find the minimum number of coins to make a given amount (coin change problem)
// todo Find all subarrays with a given sum
// todo Find the longest common subsequence of two strings
// todo Implement an LRU cache
// todo Find the maximum length of subarray with equal number of 0s and 1s
// todo Find the number of islands in a 2D matrix
// todo Find the longest palindromic subsequence
// todo Implement a trie data structure for word searches
// todo Solve the knapsack problem using dynamic programming
