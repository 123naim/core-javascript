
const arr = [2, 4, 5, 10, 15];
// let sum = 0;
// use for loop method
// for (i = 0; i < arr.length; i++){
//     sum += arr[i]
// }

// use forEach forEach method
// arr.forEach(num => sum += num);
// console.log(sum)


// use reduce method
// let sum = arr.reduce((element, index) => {
//     return element + index;
// });
// console.log(sum)
// let max = arr[0];
// for (let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log(max)
let sum = 0;
for (let i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i))
    sum += i;
}
console.log('result is = ' + sum)