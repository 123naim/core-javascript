const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const filterIng = arr.filter(function (value){
//     return value % 2 === 1
// }) 
// console.log(arr)
// console.log(filterIng)


function myfilter(arr, cb){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i], i, arr)){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
const filter = myfilter(arr, function(value, index, arr){
    return value % 2 === 1
})
const filter2 = myfilter(arr, function(value, index, arr){
    return value % 2 === 0
})

console.log(filter)
console.log(filter2)