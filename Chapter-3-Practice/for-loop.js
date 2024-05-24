// Task: 
/**
 * 1. for loop use kore sum ber korte hbe
 * 2. forEach use kore sum ber korte hbe
 * 3. reduce use kore sum ber korte hbe
 * 4. for loop use kor max number find korte hbe
 * 5. for loop use kor min number find korte hbe
 * 6. for loop use kor choto theke boro porjonto sajate hbe
 */


// 1. for loop use kore sum ber korte hbe
const arr = [2, 4, 100, 5, 10, 15];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// 2. forEach use kore sum ber korte hbe
let sum2 = 0;
arr.forEach(num => sum2 += num)
console.log(sum2);


// 3. Reduce use kore sum ber korte hbe
const sum3 = arr.reduce((acc, value) => {
    // console.log(acc, value)
    return acc + value
})
console.log(sum3)



// 4. for use kore max number ber korte hbe

let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max)


// 5. for loop use kor min number find korte hbe
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min)



// 6. for loop use kore choto theke boro porjonto sajate hbe
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
}

console.log(arr)



// 7. for loop use kore boro theke choto porjonto sajate hbe
for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
        if (arr[i] < arr[j]) {
            let x = arr[i];
            arr[i] = arr[j];
            arr[j] = x;
        }
    }
}
console.log(arr)


// array use for chat gpt
// উদাহরণ ১: অ্যারের সব সংখ্যার যোগফল নির্ণয়
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Total Sum:", sum);



// উদাহরণ ২: অ্যারের সর্বোচ্চ এবং সর্বনিম্ন মান নির্ণয়
// let arr = [34, 7, 23, 32, 5, 62];
// let max = arr[0];
// let min = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i];
//     }
//     if(arr[i] < min){
//         min = arr[i];
//     }
// }
// console.log("Max Value:", max);
// console.log("Min Value:", min);


// উদাহরণ ৩: অ্যারে থেকে প্রাইম সংখ্যা বের করা
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let primes = [];

// for(let i = 0; i < arr.length; i++){
//     let isPrime = true;
//     for(let j = 2; j <= Math.sqrt(arr[i]); j++){
//         if(arr[i] % j == 0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime && arr[i] > 1){
//         primes.push(arr[i]);
//     }
// }

// console.log("Prime Numbers:", primes);



// উদাহরণ ৪: ফিবোনাচ্চি সিরিজ তৈরি করা
// let n = 10;
// let fib = [0, 1];

// for(let i = 2; i < n; i++){
//     fib[i] = fib[i - 1] + fib[i - 2];
// }

// console.log("Fibonacci Series:", fib);


// উদাহরণ ৫: অ্যারের ডুপ্লিকেট এলিমেন্ট খুঁজে বের করা
// let arr = [1, 2, 3, 4, 2, 5, 6, 4, 7];
// let duplicates = [];

// for(let i = 0; i < arr.length; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if(arr[i] == arr[j] && !duplicates.includes(arr[i])){
//             duplicates.push(arr[i]);
//         }
//     }
// }

// console.log("Duplicate Elements:", duplicates);



