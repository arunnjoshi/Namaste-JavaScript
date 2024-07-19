// Scope and lexical analysis

function a() {
    console.log(b);
    var b = 2;
    console.log(b);
    c();
    function c() {
        var b = 1;
        console.log(b);
    }
}

var b = 10;
a();