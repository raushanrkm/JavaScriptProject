"use strict";

const chai = require("chai");

const AllPlusK = require("../all-plus-k");

const expect = chai.expect;

describe("All Plus K", () => {

  it("should return empty array when given an empty array.", () => {
    const array = [],
      k = 2,
      expected = [];

    expect(AllPlusK.get(array, k)).to.eql(expected);
  });

  it("should return empty array when no matches exist", () => {
    const array = [10, 13, 16],
      k = 2,
      expected = [];

    expect(AllPlusK.get(array, k)).to.eql(expected);
  });

  it("should return many items if they are found.", () => {
    const array = [1, 3, 5, 22, 24, 26],
      k = 2,
      expected = [1, 3, 22, 24];

    expect(AllPlusK.get(array, k)).to.eql(expected);
  });

  it("should return many items if they are found no matter the order.", () => {
    const array = [5, 22, 26, 24, 3, 1],
      k = 2,
      expected = [22, 24, 3, 1];

    expect(AllPlusK.get(array, k)).to.eql(expected);
  });

});
