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


var reduce = [{ double: 1 }, { double: 11 }, { double: 9 }, { double: 8 }].reduce((acc, curr) => {
    if (acc.double <= curr.double) {
        acc.min = acc.double
    }
    else {
        acc.min = curr.double;
    }
    return acc;
})
console.log(reduce);