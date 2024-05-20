const addition =  function (a, b) {
    return a + b;
}

// console.log(addition(5, 3))

setTimeout(function (){
    console.log('I will call after 5 second')
}, 5000)

const result = addition;
console.log(result(6, 2))