function add(a, b) {
    return a + b;
}

function manipulate(a, b, func) {
    const c = a + b;
    const d = a - b;

    // function multiply() {
    //     const m = func(a, b)
    //     return c * d * m;
    // }

    return function () {
        const m = func(a, b)
        return c * d * m;
    };
}

const multiply = manipulate(3, 4, add);
console.log(multiply())

var arr = [1, 2, 3, 4, 5];
var slicedArr = arr.slice(1, 4);


function delayLog() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, 5000);
    }
}
delayLog();

let sum = 0;
var arr = [10, 15, 20, 30];
arr.forEach(function myFunction(element) {
    sum = sum + element;
});

console.log(sum)