const arr = [1, 2, 3];

const sqrArr = arr.map(function (value) {
    // return Math.random() * 100;
    return value * value;
})

console.log(arr)
console.log(sqrArr)


function myMap(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        // const temp = arr[i] * arr[i]
        const temp = cb(arr[i], i, arr)
        newArr.push(temp)
    }
    return newArr;
}

const mten = myMap(arr, function(value) {
    return value * value * value
})

console.log(mten)
