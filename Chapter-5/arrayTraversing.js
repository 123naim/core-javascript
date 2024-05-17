const arr = [1, 4, 3, 5, 6, 7, 9]
let sum = 0;
// array sumation
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}


// array odd number find out
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
        sum += arr[i]
    }
}


// array even number find out
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sum += arr[i]
    }
}