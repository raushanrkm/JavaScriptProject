"use strict";

/**
 *
 * Write an intersection function that takes two arrays and returns the intersection of the two arrays.
 * The return data type will be an array.  There is a naive O(n^2) solution and a better O(n) solution.
 *
 */
class Intersection {


  // Review Care Fully this solution has time Complexity O(N). 

  static intersect(array1, array2) {
      if(!(array1||array2))
      return [];
    var myMap = new Map();
    var outputArray=[];
    let temp;
                  
                  // time complexity is O(N1)

        for(let index=0;index<array1.length;index++){
          if(myMap.has(array1[index])){
             temp=myMap.get(array1[index])+1;
              myMap.set(array1[index], temp);
           } 
           else
             myMap.set(array1[index], 1);

       }// end of first foor loop


              // review carefully  This loop does not have Time complexity (N^2)
             // time complexity is O(N2)
      for(let index=0;index<array2.length;index++){
               if(myMap.has(array2[index])) {

                 //comment following line of code if both array do not have repeted value
                // i assumed Array have repeted value 
                   for(let j=1; j<=myMap.get(array2[index]); j++)
                       outputArray.push(array2[index]);
        
               //  outputArray.push(array2[index]);             // uncomment if both of array do not have repetedvalue

               }  // end of if clause. 
                

        }

return outputArray;

}
}

module.exports = Intersection;
