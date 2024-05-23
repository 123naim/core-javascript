const arr = [3, 6, 32, 5, 2, 7, 4, 56, 73];
const find = arr.find((value) => {
    return value === 3;
})
console.log(find)

const findIndex = arr.findIndex(value => value === 32)
console.log(findIndex)

function myfind(arr, cb){
    for(let i = 0; i< arr.length; i++){
        if(cb(arr[i])){
            // return arr[i]
            return i
        }
    }
}

const result = myfind(arr, function(value) {
    return value === 32;
})

console.log(result)