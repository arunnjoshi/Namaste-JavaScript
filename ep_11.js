
for (var i = 0; i <= 10; i++) {
    // console.log(`for loop i ${i}`);
    function close(z) {
        setTimeout(function () {
            console.log(`settimeout: ${z}`);
        }, z * 1000)
    }
    close(i);
}