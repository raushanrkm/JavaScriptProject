"use strict";

const chai = require("chai");

const Intersection = require("../intersection");

const expect = chai.expect;

describe("intersection", () => {

  it("should get intersection of two empty arrays.", () => {
    const arr1 = [],
      arr2 = [],
      expected = [];

    expect(Intersection.intersect(arr1, arr2)).to.eql(expected);
  });

  it("should return empty array when arr1 is empty", () => {
    const arr1 = [],
      arr2 = [2, 33, 7, 22],
      expected = [];

    expect(Intersection.intersect(arr1, arr2)).to.eql(expected);
  });

  it("should return empty array when arr2 is empty", () => {
    const arr1 = [1, 2, 5, 22],
      arr2 = [],
      expected = [];

    expect(Intersection.intersect(arr1, arr2)).to.eql(expected);
  });

  it("should return all intersecting values", () => {
    const arr1 = [1, 2, 5, 22],
      arr2 = [2, 33, 7, 22],
      expected = [2, 22];

    expect(Intersection.intersect(arr1, arr2)).to.eql(expected);
  });

  it("should return all intersecting values when arrays are of different length.", () => {
    const arr1 = [1, 2, 5, 22, 19, 3, 7, 33],
      arr2 = [2, 33, 7, 22],
      expected = [2, 33, 7, 22];

    expect(Intersection.intersect(arr1, arr2)).to.eql(expected);
  });
});
