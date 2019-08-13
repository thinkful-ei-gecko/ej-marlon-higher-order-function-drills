'use strict';

/*
function maxAndMin(array) {
    let max = array[0];
    let min = array[0];
    let i = 0;

    //this will find the max
    while (i < array.length) {
        if (array[i] > max) {
            max = array[i];
        }
        i++;
    }

    //this will find the min
    while (i < array.length) {
        if (array[i] < min) {
            min = array[i];
        }
        i++;
    }

    let results = `Max is: ${max} and Min is: ${min}`

    return console.log(results);
}

maxAndMin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function computeAverage(array) {
    let totalValue = 0;
    let length = array.length;

    average = array.forEach(function (num) {
        totalValue += num;
        console.log(totalValue)
    });

    return console.log(totalValue / array.length);
}

computeAverage([1, 2, 3, 4, 5]);

*/

/*

function repeat(fn, n) {
    for (let i = 0; i < n; i++){
            console.log(fn());
        };
    }

    const goodbye = function () {
        return 'Goodbye World';
    }

    const hello = function () {
        return 'Hello World';
    }

    repeat(hello, 5);
    repeat(goodbye, 5);

    */


function filter(arr, fn) {
  let newArray = [];
  for(let i = 0; i < arr.length; i++){
    if(fn(arr[i]) == true){ 
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function (name) {
// This is known as a "predicate function" - it's a function that 
// only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

