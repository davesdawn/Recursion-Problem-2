// Write a JavaScript function to compute the sum of an array of integers.

// this is an array of numbers
let arrayOfNum = [3, 4, 5, 6, 7];

// write a recursion function to sum up the array 
function sumOfNum(arr) {

//Create a stopped for the recursion method
    if (arr.length < 1) {
        return 0;
    } else { 
      
// use the .pop() to remove and return the last element         
    return (arr.pop() + sumOfNum(arr)); // add each returned element to the array
    }
}

console.log(sumOfNum(arrayOfNum)); // prints 25