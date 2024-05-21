function sample(a, b, callback) {
    var c = a + b;
    var d = a - b;
    const result = callback(c, d)
    return result;
}

function sum(a, b) {
    return a + b;
}

const result = sample(5, 8, sum)
console.log(result)

const result2 = sample(5, 8, function(c, d){
    return c - d;
})
console.log(result2)

const result3 = sample(5, 8, function(c, d){
    return c * d;
})
console.log(result3)

const result4 = sample(5, 8, function(c, d) {
    return c / d;
})
console.log(result4)