"use strict";

const chai = require('chai');

const IntegerSort = require("../integer-sort");

const expect = chai.expect;

describe("Integer Sort", function () {

  it("should sort integer of length 1.", () => {
    const input = 5,
      expected = 5;

    expect(IntegerSort.sort(input)).to.eql(expected);
  });

  it("should sort integer already sorted.", () => {
    const input = 54321,
      expected = 54321;

    expect(IntegerSort.sort(input)).to.eql(expected);
  });

  it("should sort integer that is sorted in reverse.", () => {
    const input = 12345,
      expected = 54321;

    expect(IntegerSort.sort(input)).to.eql(expected);
  });

  it("should sort integer that is out of order.", () => {
    const input = 52067146,
      expected = 76654210;

    expect(IntegerSort.sort(input)).to.eql(expected);
  });

});