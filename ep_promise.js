function getData() {
    return $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'GET',
        dataType: 'json',
    });
}
let setTimer1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('set timer resolve 4 seconds');
    }, 4000);
});

let setTimer2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('set timer resolve 10 seconds');
    }, 10000);
});
// promises chaining 
var dataPromise = getData();
dataPromise.then((data) => {
    console.log('Data fetched successfully:', data);
    data.forEach(post => {
        $('body').append(`<p>${post.title}</p>`);
    });
    return data.length
}).catch((error) => {
    console.log('Error fetching data:');
    throw error;
}).then((data) => {
    console.log('posts count ', data);
}).catch((error) => {
    console.log('final catch');
});
// async await 
async function printData() {
    let data = await getData();
    console.log(data);
    data.forEach(post => {
        $('body').append(`<p>${post.title}</p>`);
    });
    var res1 = await setTimer1;
    console.log(res1);
    var res2 = await setTimer2;
    console.log(res2);

}

printData();