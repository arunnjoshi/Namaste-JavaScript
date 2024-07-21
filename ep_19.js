const arr = [1, 2, 3, 4, 5]

// map 
const output = arr.map(x => ({ 'double': 2 * x, 'triple': x * 3 }));
console.log(output);

// filter

var filter = output.filter(x => x.double > 6)
console.log(filter);

// reduce

var reduce = output.reduce((acc, curr) => {
    acc.double = curr.double + acc.double
    return acc;
}, { double: 0 })
console.log(reduce);