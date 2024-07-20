function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    a = 1000;
    return y;
}

x()();