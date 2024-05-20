// arguments

function test(a, b, c) {
    // console.log(arguments)
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
}
// test()
// test(10, 20, 30);

function addAll () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    console.log(sum)
}

addAll(1, 3, 5, 6, 7)
addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)