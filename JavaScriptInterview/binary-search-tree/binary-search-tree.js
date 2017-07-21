var HelperBinarySearchTree =require ('./helper-binary-search-tree');
//import { HelperBinarySearchTree } from 'helper-binary-search-tree';

//"use strict";

// class Private {

//   static exists(value, node) {
//     if (!node) {
//       return false;
//     } else if (value === node.value) {
//       return true;
//     }

//     const left = Private.exists(value, node.left),
//       right = Private.exists(value, node.right);

//     return left || right;
//   }

// }

/**
 * Binary Search Tree example.
 */
class BinarySearchTree {

  constructor() {
    this.helperBinarySearchTree= new HelperBinarySearchTree();
  }

 add(data)
{
  this.helperBinarySearchTree.add(data);
}
  /**
   * Search for a value in a BST returning true if found and false it not found.
   * @param value
   * @returns {*}
   */
  exists(value) {
    return this.helperBinarySearchTree.contains(value);
  }

  /**
   * Add items to an array when node is visited using depth first approach.  Return array when done.
   */
   dfs() {
//var helperBinarySearchTree= new HelperBinarySearchTree();

// //var binarySearchTree = new BinarySearchTree();
// helperBinarySearchTree.add(5);
// helperBinarySearchTree.add(3);
// helperBinarySearchTree.add(7);
// helperBinarySearchTree.add(2);
// helperBinarySearchTree.add(4);
// helperBinarySearchTree.add(4);
// helperBinarySearchTree.add(6);
// helperBinarySearchTree.add(8);
// helperBinarySearchTree.print();
// console.log("i am roshan");

       return this.helperBinarySearchTree.traverseDFS();

  }

  /**
   * Add items to an array when node is visited using depth first approach. Return array when done.
   */
  bfs() {
  // var helperBinarySearchTree= new HelperBinarySearchTree();
//    helperBinarySearchTree.add(5);
//  helperBinarySearchTree.add(3);
//  helperBinarySearchTree.add(7);
//  helperBinarySearchTree.add(2);
//  helperBinarySearchTree.add(4);
// helperBinarySearchTree.add(4);
// helperBinarySearchTree.add(6);
//  helperBinarySearchTree.add(8);
//  helperBinarySearchTree.print();
       var bfsOutputArray=[];

     return this.helperBinarySearchTree.traverseBFS(bfsOutputArray);



  }

  /**
   *  Write a function in the Binary Search Tree class (function zigZag()) that returns array.
   *  The array will contain all items in a tree in a zig zagging order.  In other words,
   *  the first level (i.e. the root), you will print out left to right, then the second level
   *  you will print out right to left, then the third level, you will print out left to right,
   *  and so on and so on.  Hint, which tree parsing algorithm does this sound most like?
   *  What are two data structures that are opposite of each other that could help you here.
   */
  zigZag() {

// //var helperBinarySearchTree= new HelperBinarySearchTree();
// helperBinarySearchTree.add(5);
// helperBinarySearchTree.add(3);
// helperBinarySearchTree.add(7);
// helperBinarySearchTree.add(2);
// helperBinarySearchTree.add(4);
// helperBinarySearchTree.add(4);
// helperBinarySearchTree.add(6);
// helperBinarySearchTree.add(8);



return this.helperBinarySearchTree.zigZag();

  }

}

module.exports = BinarySearchTree;
