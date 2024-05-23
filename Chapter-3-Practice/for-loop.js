// Task: 
/**
 * 1. for loop use kore sum ber korte hbe
 * 2. forEach use kore sum ber korte hbe
 * 3. reduce use kore sum ber korte hbe
 * 4. for loop use kor max number find korte hbe
 */


// 1. for loop use kore sum ber korte hbe
const arr = [2, 4, 5, 10, 15];
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log(sum);

// 2. forEach use kore sum ber korte hbe
let sum2 = 0;
arr.forEach(num => sum += num)
