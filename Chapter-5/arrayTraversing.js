const arr = [1, 4, 3, 5, 6, 7, 9]
let sum = 0;
// array sumation
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum)

// array odd number find out
let odd = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        odd.push(arr[i])
    }
}
console.log(odd)



// array even number find out
let even = [];
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        even.push(arr[i])
    }
}
console.log(even)