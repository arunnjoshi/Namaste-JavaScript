function calculate(a, b, logic) {
    return logic(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

console.log(`Add: ${calculate(10, 20, add)}`);
console.log(`Sub: ${calculate(10, 20, sub)}`);
console.log(`Mul: ${calculate(10, 20, mul)}`);
console.log(`Div: ${calculate(10, 20, div)}`);