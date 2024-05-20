// First Class Function

function add(a, b) {
    return a+b;
}

// 1. A Function can be Stored in Variable
const sum = add;
console.log(sum(4, 5))
console.log(typeof sum)

// 2. A Function can be Stored in an Array
const arr = [];
arr.push(add)
console.log(arr)
console.log(arr[0](5, 3))

// 3. A Function can be Stored in an Object
const obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(7, 4))

// 4. We can Create Function as Need
setTimeout(function (){
    console.log('I have created....')
}, 100)

// 5. We can Pass Function as an Arguments
// 6. We can return Functions from Another Function
