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

  const noOfElements = +userInput[0];
  const arr = userInput[1].split(" ").map(Number);
  const flag = userInput[2] === "true";
//   console.log(noOfElements);
//   console.log(arr);
//   console.log(flag);
  const total = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(flag ? total : total / noOfElements);
  //end-here
});

//! CMD => type input.txt | node index.js
//! powershell => cat input.txt | node index.js
