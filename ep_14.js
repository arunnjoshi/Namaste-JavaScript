console.log("start")
setTimeout(() => {
    console.log('set timeout');
}, 0);

console.log("end")

var startDate = new Date().getTime();
var endDate = startDate;
while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
    console.log(new Date().getSeconds());
}

console.log('while end');