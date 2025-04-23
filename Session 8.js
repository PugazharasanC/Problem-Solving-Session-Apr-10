// ? Day 8: Linked Lists
// * Session Focus: Linked list creation, traversal, and manipulation.
// ? Session Practice Questions:
// ! Implement a singly linked list with insertion and deletion operations

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtBeginning(data) {
    this.head = new Node(data, this.head);
  }

  insertAtLast(data) {
    if (this.head == null) {
      this.head = new Node(data);
    } else {
      let head = this.head;
      while (head.next != null) {
        head = head.next;
      }
      head.next = new Node(data);
    }
  }
  // ! Insert a node at a specific position in a linked list
  insertAtPosition(data, position) {
    if (position == 0) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    if (position < 0) return;
    let current = this.head;
    let prev = null;
    let ind = 0;

    while (current && ind < position) {
      ind++;
      prev = current;
      current = current.next;
    }
    if (ind < position) {
      return;
    }
    if (prev == null) return;
    const newNode = new Node(data);
    prev.next = newNode;
    newNode.next = current;
  }
  print(msg) {
    const arr = [];
    let head = this.head;
    while (head != null) {
      arr.push(head.data);
      head = head.next;
    }
    console.log(
      msg,
      msg ? " :: " : "",
      "HEAD => " + arr.join(" => ") + " => NULL"
    );
  }
  // ! Reverse a linked list iteratively
  reverse() {
    // initialise current with first element of the list
    let current = this.head;
    // initialise prev with null
    let prev = null;

    //? prev     null    40 30 20 10 50 60 70    80
    //? current  40      30 20 10 50 60 70 80    null
    //? next     30      20 10 50 60 70 80 null

    // untill the current becomes null or the list reaches the end, iterate the list
    while (current != null) {
      // secure the next node before overriding the current.next
      let next = current.next;
      // for reversing, point the prev node as next
      current.next = prev;
      // once pointing the previous node, hold the current node as prev
      prev = current;
      // move to the next node, the next node is already secured with varibale next
      current = next;
    }
    // once it reachs the end, the current will be null, and the only data which we will have is prev
    // so assign prev to head of the linked list
    this.head = prev;
  }
  // ! Find the middle node of a linked list
  middleNode() {
    let fast = this.head;
    let slow = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  }
  removeDuplicatesSorted() {
    let head = this.head;
    while (head && head.next) {
      if (head.data == head.next.data) {
        head.next = head.next.next;
      } else {
        head = head.next;
      }
    }
  }

  hasCycle() {
    let fast = this.head;
    let slow = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) return true;
    }
    return false;
    }

    makeCycle() {
        let head = this.head;
        let cycleNode = null;
        while (head && head.next) {
            if(Math.random()*2 < 0.5){
                cycleNode = head;
            }
            head = head.next;
        }
        head.next = cycleNode;
    }
}

const list = new LinkedList();
// list.insertAtPosition(10, 0);
// // head -> 10 => null
// list.insertAtPosition(20, 0);
// // head -> 20 => 10 => null
// list.insertAtBeginning(30);
// // head -> 30 => 20 => 10 => null
// list.insertAtBeginning(40);
// // head -> 40 => 30 => 20 => 10 => null
// list.print();
// list.insertAtLast(50);
// // head -> 40 => 30 => 20 => 10 => 50 => null
// list.insertAtLast(60);
// // head -> 40 => 30 => 20 => 10 => 50 => 60 => null
// list.insertAtLast(70);
// // head -> 40 => 30 => 20 => 10 => 50 => 60 => 70 => null
// list.insertAtLast(80);
// // head -> 40 => 30 => 20 => 10 => 50 => 60 => 70 => 80 => null
// list.insertAtLast(90)
// list.insertAtLast(100)
// list.print();
// list.reverse();
// list.print();
// console.log("Middle Node is", list.middleNode().data)
// ! Detect a cycle in a linked list

// ! Merge two sorted linked lists

function merge(list1, list2) {
  let head1 = list1.head;
  let head2 = list2.head;

  const mergedList = new LinkedList();

  while (head1 && head2) {
    if (head1.data < head2.data) {
      mergedList.insertAtLast(head1.data);
      head1 = head1.next;
    } else {
      mergedList.insertAtLast(head2.data);
      head2 = head2.next;
    }
  }

  while (head1) {
    mergedList.insertAtLast(head1.data);
    head1 = head1.next;
  }

  while (head2) {
    mergedList.insertAtLast(head2.data);
    head2 = head2.next;
  }
  return mergedList;
}
const list1 = new LinkedList();
Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
  .sort((a, b) => a - b)
  .forEach((val) => list1.insertAtLast(val));
const list2 = new LinkedList();
Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
  .sort((a, b) => a - b)
  .forEach((val) => list2.insertAtLast(val));
list1.print("List 1");
list2.print("List 2");
const mergedList = merge(list1, list2);
mergedList.print("Merged List");
// ! Remove duplicates from a sorted linked list
mergedList.removeDuplicatesSorted();
mergedList.print("Removed Duplciates");
console.log("Has Cycle?", mergedList.hasCycle());
mergedList.makeCycle()
console.log("Has Cycle?", mergedList.hasCycle());
// todo Post-Session Practice Questions:
// todo Reverse a linked list recursively
// todo Check if a linked list is a palindrome
// todo Remove the nth node from the end of a linked list
// todo Find the intersection point of two linked lists
// todo Implement a doubly linked list
// todo Add two numbers represented by linked lists
// todo Partition a linked list around a value x
// todo Clone a linked list with next and random pointer
// todo Sort a linked list using merge sort
// todo Reverse nodes in k-group in a linked list
