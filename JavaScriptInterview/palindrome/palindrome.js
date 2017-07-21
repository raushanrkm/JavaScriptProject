"use strict";

/**
 * Given a string, return true or false if given string is a palindrome.
 */
class Palindrome {

  static isPalindrome(str) {
  if(!str)
    return false;
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;

  }

}

module.exports = Palindrome;
