//? Day 9: Trees & Graphs
//* Session Focus: Tree and graph traversal, construction, and manipulation.
//? Session Practice Questions:
//! Implement a binary search tree with insertion and search

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(data, root = this.root) {
    if (this.root == null) {
      this.root = new Node(data);
    } else if (data < root.data) {
      if (root.left == null) {
        root.left = new Node(data);
      } else {
        this.insert(data, root.left);
      }
    } else {
      if (root.right == null) {
        root.right = new Node(data);
      } else {
        this.insert(data, root.right);
      }
    }
  }

  search(data, root = this.root) {
    if (root == null) return false;
    if (data == root.data) return true;
    if (data < root.data) return this.search(data, root.left);
    return this.search(data, root.right);
  }

  //! Perform pre-order, in-order, and post-order traversals
  inorder(root = this.root) {
    if (root != null) {
      this.inorder(root.left);
      console.log(root.data);
      this.inorder(root.right);
    }
  }

  preorder(root = this.root) {
    if (root != null) {
      console.log(root.data);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  postorder(root = this.root) {
    if (root == null) return;
    this.postorder(root.left);
    this.postorder(root.right);
    console.log(root.data);
  }
  //! Find the height of a binary tree
  height(root = this.root) {
    if (root == null) return 0;
    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }
  //! Check if a binary tree is a binary search tree
  isBst(root = this.root) {
    if (root == null) return true;
    if (root.left != null && root.left.data >= root.data) return false;
    if (root.right != null && root.right.data < root.data) return false;
    return this.isBst(root.left) && this.isBst(root.right);
  }

  //! Count the number of leaf nodes in a binary tree
  noOfLeafs(root = this.root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) return 1;
    return this.noOfLeafs(root.left) + this.noOfLeafs(root.right);
  }
  //! Level order traversal of a binary tree
  levelOrder(level = [this.root], values = []) {
    if (level.length == 0) return values;

    const nextLevel = [];
    level.forEach((node) => {
      values.push(node.data);
      if (node.left) nextLevel.push(node.left);
      if (node.right) nextLevel.push(node.right);
    });
    return this.levelOrder(nextLevel, values);
  }
  //! Find the lowest common ancestor of two nodes in a BST
  lca(p, q, root = this.root) {
    if (root == null) return null;
    if (p < root.data && q < root.data) return this.lca(p, q, root.left);
    if (p > root.data && q > root.data) return this.lca(p, q, root.right);
    return root;
  }
}
// is binary tree a binary search tree using array...
// function isBst(tree = [], root = 0) {
//   if (tree[root] == undefined) return true;

//   if (tree[2 * root + 1] != undefined && tree[2 * root + 1] >= tree[root]) {
//     return false;
//   }

//   if (tree[2 * root + 2] != undefined && tree[2 * root + 2] < tree[root]) {
//     return false;
//   }
//   return isBst(tree, 2 * root + 1) && isBst(tree, 2 * root + 2);
// }

// function countLeafs(arr = [], root = 0) {
//   if (arr[root] == undefined) return 0;
//   if (arr[2 * root + 1] == undefined && arr[2 * root + 2] == undefined)
//     return 1;
//   return countLeafs(arr, 2 * root + 1) + countLeafs(arr, 2 * root + 2);
// }
// const arr = [5, 3, 7, 2, 4, 6, 8, , , , , , , , 10, 1]; //Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
// console.log(arr, "is BST?", isBst(arr));
// console.log("Number of leafs", countLeafs(arr));

// const bst = new BST();
// [5, 3, 7, 2, 4, 6, 8, 10, 1].forEach((val) => bst.insert(val));
// console.log("Height of tree is", bst.height());
// console.log("Is BST?", bst.isBst());
// console.log("Number of leaf nodes", bst.noOfLeafs());

// console.log("In Order :::::::::::::::");
// bst.inorder();
// console.log("Level Order ::::::::::::::::");
// console.log(bst.levelOrder());
// console.log(bst.lca(8, 6).data);
// console.log("Pre Order :::::::::::::::");
// bst.preorder();
// console.log("Post Order :::::::::::::::");
// bst.postorder();
// todo Post-Session Practice Questions:
// todo Find the diameter of a binary tree
// todo Check if two binary trees are identical
// todo Convert a binary tree to its mirror image
// todo Construct a binary tree from its inorder and preorder traversals
// todo Implement depth-first search for a graph
// todo Implement breadth-first search for a graph
// todo Find all paths from root to leaf nodes in a binary tree
// todo Check if a binary tree is balanced
// todo Serialize and deserialize a binary tree
// todo Find if there is a path with a given sum in a binary tree

let graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["D"],
  D: ["E"],
  E: ["B"],
};

let graphMatrix = [
// A, B, C, D, E
  [0, 1, 1, 0, 0], //A
  [0, 0, 0, 1, 0], //B
  [0, 0, 0, 1, 0], //C
  [0, 0, 0, 0, 1], //D
  [0, 1, 0, 0, 0], //E
];
