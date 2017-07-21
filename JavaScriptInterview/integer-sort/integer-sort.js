"use strict";
/**
 *
 * Given a positive integer between 0 and 100,000,000, sort the individual numbers in the integer from greatest to smallest,
 * generating the largest integer possible.
 * Example:  input set: (12345) would return 54321
 * Example:  input set: (52067146) would return 76654210
 *
 */
class IntegerSort {

  static sort(integer) {
     let temp_array=[];
     let separatenumber;
    if(integer<10)
       return integer;
     while(integer!=0){
       separatenumber=integer%10;
       integer=parseInt(integer/10);
       temp_array.push(separatenumber);
    }

  temp_array.sort(function(a, b){return a-b});
  var return_number=0;
  var mutiplyby=1;
      for(let i=0; i<temp_array.length;i++)
      {
        return_number=return_number+ mutiplyby*temp_array[i];
        mutiplyby=mutiplyby*10;

      }
       
       return return_number;

  } // end of method

}

module.exports = IntegerSort;