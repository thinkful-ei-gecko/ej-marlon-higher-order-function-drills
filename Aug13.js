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