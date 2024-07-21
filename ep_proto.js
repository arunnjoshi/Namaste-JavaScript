let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(arr);

Array.prototype.find = function () {
    return 10;
}

console.log(arr.find());

Object.prototype.Name = function () {
    return 'Arun Joshi'
}
console.log({}.Name());

Function.prototype.Name = function () {
    return "FUNC Name"
}
console.log(arr.find().Name());