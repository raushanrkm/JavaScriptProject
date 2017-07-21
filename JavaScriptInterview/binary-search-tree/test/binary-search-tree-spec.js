"use strict";

const chai = require("chai");

const BinarySearchTree = require("../binary-search-tree")

const expect = chai.expect;

describe("BinarySearchTree", function () {

  describe("exists", function () {

    it("should not find an item when the tree is empty", function () {
      var input = 15;
        var expected = false;

      var bst = new BinarySearchTree();
       var result = bst.exists(input);

      expect(result).to.eql(expected);
    });

    it("should find an item when head is that element", function () {
      var input = 15, expected = true;

      var bst = new BinarySearchTree();
           bst.add(15);
        var result = bst.exists(input);

      expect(result).to.eql(expected);
    });

    it("should not find the element when it doesn't exist.", function () {
     var bst = new BinarySearchTree();
     var input = 99, expected = false;
     bst.add(20);
     bst.add(15);
     bst.add(30);
     bst.add(10);
     bst.add(18);
     bst.add(22);
     bst.add(33);

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      // var bst = new BinarySearchTree(n20);
      var result = bst.exists(input);

      expect(result).to.eql(expected);

    });

    it("should find the element when its all the way to the left", function () {
      var input = 10, expected = true;

      var bst = new BinarySearchTree();
     bst.add(20);
     bst.add(15);
     bst.add(30);
     bst.add(10);
     bst.add(18);
     bst.add(22);
     bst.add(33);

     // var bst = new BinarySearchTree(n20);
      var result = bst.exists(input);

      expect(result).to.eql(expected);

    });

    it("should find the element when its all the way to the right", function () {
      var input = 33, expected = true;

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      var bst = new BinarySearchTree();
    //
     bst.add(20);
     bst.add(15);
     bst.add(30);
     bst.add(10);
     bst.add(18);
     bst.add(22);
     bst.add(33);

     var result = bst.exists(input);

      expect(result).to.eql(expected);

    });

    it("should find the element when its in the middle left", function () {
      var input = 15, expected = true;

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

   

      var bst = new BinarySearchTree();
     
     bst.add(20);
     bst.add(15);
     bst.add(30);
     bst.add(10);
     bst.add(18);
     bst.add(22);
     bst.add(33);
      var result = bst.exists(input);

      expect(result).to.eql(expected);

    });

    it("should find the element when its in the middle right", function () {
      var input = 30, expected = true;

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      // var bst = new BinarySearchTree(n20);

      var bst = new BinarySearchTree();
     
     bst.add(20);
     bst.add(15);
     bst.add(30);
     bst.add(10);
     bst.add(18);
     bst.add(22);
     bst.add(33);
      var result = bst.exists(input);

      expect(result).to.eql(expected);

    });

  });

  describe("bfs", function () {

    it("should return bfs when tree is empty", function () {
      var expected = [];

      var bst = new BinarySearchTree();
      var result = bst.bfs();

      expect(result).to.eql(expected);
    });

    it("should return bfs when tree is one level deep", function () {
      var expected = [20];
      var bst = new BinarySearchTree();
      bst.add(20);
      var result = bst.bfs();

      expect(result).to.eql(expected);
    });

    it("should return bfs when tree is two levels deep", function () {
      var expected = [20, 15, 30];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      var result = bst.bfs();

      expect(result).to.eql(expected);

    });

    it("should return bfs when tree is three levels deep", function () {
      var expected = [20, 15, 30, 10, 18, 22, 33];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      bst.add(10);
      bst.add(18);
      bst.add(22);
      bst.add(33);
      var result = bst.bfs();

      expect(result).to.eql(expected);

    });

    it("should return bfs when tree is four levels deep", function () {
      var expected = [20, 15, 30, 10, 18, 22, 33, 9, 11, 17, 19, 21, 23, 32, 34];

      var bst = new BinarySearchTree();

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      // var n9 = new Node(9);
      // var n11 = new Node(11);
      // var n17 = new Node(17);
      // var n19 = new Node(19);
      // var n21 = new Node(21);
      // var n23 = new Node(23);
      // var n32 = new Node(32);
      // var n34 = new Node(34);

      // n10.left = n9;
      // n10.right = n11;

      // n18.left = n17;
      // n18.right = n19;

      // n22.left = n21;
      // n22.right = n23;

      // n33.left = n32;
      // n33.right = n34;
      bst.add(20);
      bst.add(15);
      bst.add(30);
      bst.add(10);
      bst.add(18);
      bst.add(22);
      bst.add(33);
      bst.add(9);
      bst.add(11);
      bst.add(17);
      bst.add(19);
      bst.add(21);
      bst.add(23);
      bst.add(32);
      bst.add(34);

     
      var result = bst.bfs();

      expect(result).to.eql(expected);

    });

  });

  describe("dfs", function () {

    it("should return dfs when tree is empty", function () {
      var expected = [];

      var bst = new BinarySearchTree();
      var result = bst.dfs();

      expect(result).to.eql(expected);
    });

    it("should return dfs when tree is one level deep", function () {
      var expected = [20];

     // var n20 = new Node(20);

      var bst = new BinarySearchTree();
      bst.add(20);
      var result = bst.dfs();

      expect(result).to.eql(expected);
    });

    it("should return dfs when tree is two levels deep", function () {
      var expected = [20, 15, 30];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      var result = bst.dfs();

      expect(result).to.eql(expected);

    });

    it("should return dfs when tree is three levels deep", function () {
      var expected = [20, 15, 10, 18, 30, 22, 33];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      bst.add(10);
      bst.add(18);
      bst.add(22);
      bst.add(33)
      var result = bst.dfs();

      expect(result).to.eql(expected);

    });

    
    it("should return dfs when tree is four levels deep", function () {
      var expected = [20, 15, 10, 9, 11, 18, 17, 19, 30, 22, 21, 23, 33, 32, 34];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      // var n9 = new Node(9);
      // var n11 = new Node(11);
      // var n17 = new Node(17);
      // var n19 = new Node(19);
      // var n21 = new Node(21);
      // var n23 = new Node(23);
      // var n32 = new Node(32);
      // var n34 = new Node(34);

      // n10.left = n9;
      // n10.right = n11;

      // n18.left = n17;
      // n18.right = n19;

      // n22.left = n21;
      // n22.right = n23;

      // n33.left = n32;
      // n33.right = n34;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      bst.add(10);
      bst.add(18);
      bst.add(22);
      bst.add(33);
      bst.add(9);
      bst.add(11);
      bst.add(17);
      bst.add(19);
      bst.add(21);
      bst.add(23);
      bst.add(32);
      bst.add(34);
      var result = bst.dfs();

      expect(result).to.eql(expected);

    });
  });

  describe("zigZag", function () {

    it("should not zigzag when the tree is empty", function () {
      var expected = [];

      var bst = new BinarySearchTree();
      var result = bst.zigZag();

      expect(result).to.eql(expected);
    });

    it("should zigzag when tree is one level deep", function () {
      var expected = [20];

    
      var bst = new BinarySearchTree();
      bst.add(20);
      var result = bst.zigZag();

      expect(result).to.eql(expected);
    });

    it("should zigzag when tree is two levels deep", function () {
      var expected = [20, 15, 30];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      var result = bst.zigZag();

      expect(result).to.eql(expected);

    });

    it("should zigzag when tree is three levels deep", function () {
      var expected = [20, 15, 30, 33, 22, 18, 10];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      bst.add(10);
      bst.add(18);
      bst.add(22);
      bst.add(33);
      var result = bst.zigZag();

      expect(result).to.eql(expected);

    });

    it("should zigzag when tree is four levels deep", function () {
      var expected = [20, 15, 30, 33, 22, 18, 10, 9, 11, 17, 19, 21, 23, 32, 34];

      // var n20 = new Node(20);
      // var n15 = new Node(15);
      // var n30 = new Node(30);

      // n20.left = n15;
      // n20.right = n30;

      // var n10 = new Node(10);
      // var n18 = new Node(18);
      // var n22 = new Node(22);
      // var n33 = new Node(33);

      // n15.left = n10;
      // n15.right = n18;

      // n30.left = n22;
      // n30.right = n33;

      // var n9 = new Node(9);
      // var n11 = new Node(11);
      // var n17 = new Node(17);
      // var n19 = new Node(19);
      // var n21 = new Node(21);
      // var n23 = new Node(23);
      // var n32 = new Node(32);
      // var n34 = new Node(34);

      // n10.left = n9;
      // n10.right = n11;

      // n18.left = n17;
      // n18.right = n19;

      // n22.left = n21;
      // n22.right = n23;

      // n33.left = n32;
      // n33.right = n34;

      var bst = new BinarySearchTree();
      bst.add(20);
      bst.add(15);
      bst.add(30);
      bst.add(10);
      bst.add(18);
      bst.add(22);
      bst.add(33);
      bst.add(9);
      bst.add(11);
      bst.add(17);
      bst.add(19);
      bst.add(21);
      bst.add(23);
      bst.add(32);
      bst.add(34);
      var result = bst.zigZag();

      expect(result).to.eql(expected);

    });

  });

});
