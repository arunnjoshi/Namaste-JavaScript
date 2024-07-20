function Counter() {
    var i = 0;
    this.incrementCount = function () {
        return ++i;
    }
    this.decrementCount = function () {
        if (i == 0)
            return 0;
        return --i;
    }
}

let count = new Counter();
console.log(count.incrementCount());
console.log(count.decrementCount());
console.log(count.decrementCount());
console.log(count.decrementCount());
console.log(count.incrementCount());


let count2 = new Counter();
console.log(count2.incrementCount());
console.log(count2.decrementCount());
console.log(count2.incrementCount());
console.log(count2.incrementCount());
console.log(count2.incrementCount());