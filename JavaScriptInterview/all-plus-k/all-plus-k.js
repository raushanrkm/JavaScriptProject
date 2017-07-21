"use strict";

/**
 *
 * Given a set of ‘N’ numbers and K, return an array of values where "value + K" also exists in the set of numbers.
 * Example:  input set: (1, 2, 3, 4) where  K = 2.  In this case you result would be [1, 2] because 3 (i.e. 1 + K = 3) is in the array, and 4 (2 + K = 4) is also in the array.
 * Example:  input set: (1, 4, 7, 20, 23) where  K = 3.  In this case you result would be [4, 20] because 4 + K = 7 (which is in the set) and 20 + K = 23 (which is in the set)
 *
 */
class AllPlusK {


  static get(array, k) {
    if (array.length==0)
      return array;
    var myMap = new Map();
    var outputarry=[];
    let leftneighbour;
    let rightneighbour;
    for(let index=0;index<array.length;index++){
               myMap.set(array[index],1);
               leftneighbour=array[index]-k;
               rightneighbour=array[index]+k;

                // if array is not sorted then we have to find left and rigth neighbour
                // if arry is sorted then then we have to find only rightneighbour
                // i write code here for unsorted array  that's why i find both left and right neighbour
               if(myMap.has(leftneighbour)){
                   outputarry.push(leftneighbour);
                   
                }

                if(myMap.has(rightneighbour)){
                   outputarry.push(array[index]);
                  
                }
      }    //end of for loop;

                
               // array is soted then we just need one statement  (return outputarry;)  otherwise
               // we have to filter dublicte value for this i used filter before return from method 
               // i assumed array is not sorted. 



// return outputarry                            
                               
return outputarry.filter( function( item, index, inputArray ) {    // this for removing dublicate value from Array
                      return inputArray.indexOf(item) == index;
                    });
              
  } //end of method

} // end of class

module.exports = AllPlusK;
