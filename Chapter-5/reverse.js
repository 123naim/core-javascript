const arr = [1, 2, 3, 4, 5, 6, 7];
// Not a perfect way
// for(let i = arr.length; i >= 0; i--){
//     console.log(arr[i])
// }

for (let i = 0; i < (arr.length / 2); i++){
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i ] = temp
}
console.log(arr)