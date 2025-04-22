// ? Day 7: Stacks & Queues
// * Session Focus: Stack and queue operations and applying them to solve problems.
// ? Session Practice Questions:
// Object Oriented Programming
// * Implement a stack using an array
class Stack {
  constructor(size = +Infinity) {
    this._stack = [];
    this._top = -1;
    this._size = size;
  }
  isEmpty() {
    return this._top == -1;
  }
  push(value) {
    if (this._top + 1 == this._size) {
      console.error("Maximum Stack Limit Exceeded");
      throw new Error("Stack Overflow");
    }
    this._top++;
    this._stack[this._top] = value;
  }
  pop() {
    if (this._top == -1) {
      throw new Error("Stack is empty");
    }
    const value = this._stack[this._top];
    this._top--;
    return value;
  }
  seek() {
    return this._stack[this._top];
  }
}

// ! Check for balanced parentheses in an expression
function checkBalanced(str = "") {
  const stack = new Stack();
  const opening = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let val of str) {
    if (val == "{" || val == "[" || val == "(") {
      stack.push(val);
    } else if (val == "}" || val == "]" || val == ")") {
      if (stack.isEmpty() || opening[val] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}
// const testCases = [
//   { input: "a + (b * c) - {d / [e + f]}", expected: true },
//   { input: "(a + b) * (c + d]", expected: false },
//   { input: "((([]){}))", expected: true },
//   { input: "([)]", expected: false },
//   { input: "abc123", expected: true },
//   { input: "(", expected: false },
//   { input: ")", expected: false },
//   { input: "(()", expected: false },
//   { input: "{[()]}", expected: true },
//   { input: "{[(])}", expected: false },
// ];
// testCases.forEach(({ input, expected }, index) => {
//   const result = checkBalanced(input);
//   const passed = result === expected;
//   console.log(
//     `Test Case ${index + 1}:`,
//     passed ? "✅ Passed" : "❌ Failed",
//     `| Input: "${input}" | Expected: ${expected} | Got: ${result}`
//   );
// });

// ! Reverse a string using a stack
function reverseString(str = "") {
  const stack = new Stack();
  let reversed = [];
  for (let val of str) {
    stack.push(val);
  }
  while (!stack.isEmpty()) {
    reversed.push(stack.pop());
  }
  return reversed.join("");
}
// console.log(reverseString('Reversed Using Stack'))
// ! Implement a queue using an array
class Queue {
  constructor() {
    this._queue = [];
  }
  isEmpty() {
    return this._queue.length == 0;
  }

  enqueue(value) {
    this._queue.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this._queue.shift();
  }
  seek() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this._queue[0];
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.seek());
// console.log(queue.seek());
// console.log(queue.seek());
// console.log(queue.seek());
// console.log(queue.seek());
// console.log(queue.dequeue());

// console.log(queue.seek())

// console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// ! Implement a queue using two stacks
// * Stack => LIFO // FILO
// * Oueue => LILO // FIFO

// ? How we can achieve implementing a queue using two stacks?

function queue() {
  const stack1 = new Stack();
  const stack2 = new Stack();

  return {
    enqueue: function (value) {
      stack1.push(value);
    },
    dequeue: function () {
      if (stack2.isEmpty()) {
        while (!stack1.isEmpty()) {
          stack2.push(stack1.pop());
        }
      }
      if (stack2.isEmpty()) {
        throw new Error("Queue is Empty");
      }
      return stack2.pop();
    },
  };
}

// ! Find the next greater element for each array element
function nextGreaterElemet(arr = []) {
  // O(n**2)
  for (let ind = 0; ind < arr.length; ind++) {
    let found = false;
    for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
      if (arr[ind] < arr[ind1]) {
        found = true;
        arr[ind] = arr[ind1];
        break;
      }
    }
    if (found == false) {
      arr[ind] = -1;
    }
  }
  console.log(arr);
}

function optimisedNGE(arr = []) {
  const stack = new Stack();
  const res = Array(arr.length).fill(-1);
  for (let ind = 0; ind < arr.length; ind++) {
    while (!stack.isEmpty() && arr[stack.seek()] < arr[ind]) {
      res[stack.pop()] = arr[ind];
    }
    stack.push(ind);
  }
  console.log(res);
}
optimisedNGE([3, 2, 1, 2, 4, 3]);
// todo Post-Session Practice Questions:
// todo Implement a stack with getMin() function in O(1) time
// todo Sort a stack using only stack operations
// todo Implement a circular queue
// todo Reverse a queue using recursion
// todo Implement a stack using queues
// todo Check if a string of parentheses can be valid after removing at most one character
// todo Design a stack that supports push, pop, top, and retrieving the minimum element in constant time
// todo Implement a queue using a linked list
// todo Convert infix expression to postfix
// todo Implement a priority queue using a binary heap
