const arr = [1, 2, 3, 4, 5]
// let sum = 0;
// arr.forEach(function (value, index, arr) {
//     // console.log(value, index, arr)
//     sum += value;
// })
// console.log(sum)

function forEach (arr, cb) {
    for(let i = 0; i<arr.length; i++){
        // console.log(arr[i], i, arr)
        cb(arr[i], i, arr)
    }
}

let sum = 0;
forEach(arr, function(value, index, array){
    console.log(value, index, array)
    sum += value;
})

console.log(sum)