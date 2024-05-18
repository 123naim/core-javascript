const arr = [4, 5, 9, 6];
// const arr2 = [5, 10, 45, 23]

// console.log(arr.join(' | '))
// const arr3 = arr.concat(arr2)
// console.log(arr3);

// arr.fill(true)
// console.log(arr)

// console.log(Array.isArray(arr))


var arr2 = Array.from(arr)
console.log(arr2)


const array = [1, 2];
const array2 = Array.from(array);

array2[0] = 5;
console.log(array)
console.log(array2)
