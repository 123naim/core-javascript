const arr = [1, 2, 3, 4, 5, 6];

const sum = arr. reduce((prev, curr) => {
    // console.log(prev, curr)
    return prev + curr;
}, 0)
// console.log(sum)

const max = arr.reduce((prev, curr) => {
    return Math.max(prev, curr)
}, 0)

// console.log(max)

function myReduce(arr, cb, acc){
    for(let i = 0; i< arr.length; i++){
        acc = cb(acc, arr[i])
    }
    return acc
}

const sum2 = myReduce(arr, function(prev, curr){
    return prev + curr
}, 0)
console.log(sum2)

const max2 = myReduce(arr, function(prev, curr) {
    return Math.max(prev, curr)
}, 0)
console.log(max2)

const min = myReduce(arr, function(prev, curr) {
    return Math.min(prev, curr)
}, arr[0])
console.log(min)

