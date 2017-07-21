"use strict";

const chai = require("chai");

const Palindrome = require("../palindrome");

const expect = chai.expect;

describe("palindrome", () => {

  it("should return false when string is not palindrome.", () => {
    const str = "apple",
      expected = false;

    expect(Palindrome.isPalindrome(str)).to.eql(expected);
  });

  it("should return true when is palindrome and string has odd length.", () => {
    const str = "12345654321",
      expected = true;

    expect(Palindrome.isPalindrome(str)).to.eql(expected);
  });

  it("should return true when is palindrome and string has even length.", () => {
    const str = "123456654321",
      expected = true;

    expect(Palindrome.isPalindrome(str)).to.eql(expected);
  });

  it("should return false when empty string.", () => {
    const str = "",
      expected = false;

    expect(Palindrome.isPalindrome(str)).to.eql(expected);
  });

  it("should return true when string has one character.", () => {
    const str = "A",
      expected = true;

    expect(Palindrome.isPalindrome(str)).to.eql(expected);
  });

});
