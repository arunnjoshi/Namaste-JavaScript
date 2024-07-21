const arr = [1, 2, 3, 4, 5]

// map 
const output = arr.map(x => ({ 'double': 2 * x, 'triple': x * 3 }));
// console.log(output);

// filter

var filter = output.filter(x => x.double > 6)
// console.log(filter);

// reduce

var reduce = output.reduce((acc, curr) => {
    acc.double = curr.double + acc.double
    return acc;
}, { double: 0 })
// console.log(reduce);


var reduce = [{ double: -1 }, { double: 11 }, { double: 9 }, { double: -10 }].reduce((acc, curr) => {
    // min
    if (acc.min == undefined) {
        acc.min = curr.double;
    }
    else {
        acc.min = acc.min > curr.double ? curr.double : acc.min;
    }

    // max 
    if (acc.max == undefined) {
        acc.max = curr.double;
    }
    else {
        acc.max = acc.max < curr.double ? curr.double : acc.max;
    }
    return acc
}, {})
console.log(reduce);