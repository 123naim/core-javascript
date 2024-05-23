const arr = [3, 6, 32, 5, 2, 7, 4, 56, 73];
const find = arr.find((value) => {
    return value === 3;
})
// console.log(find)

const findIndex = arr.findIndex(value => value === 32)
// console.log(findIndex)

function myfind(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}

const result2 = myfind(arr, function (value) {
    return value === 32;
})

// console.log(result2)


// var grade = 'A';
// var result = 0;
// switch (grade) {
//     case 'A':
//         result += 10;
//     case 'B':
//         result += 9;
//     case 'C':
//         result += 8;
//     default:
//         result += 0;
// }

// console.log(result);



// const obj1 = { property1: '10' };
// const obj2 = Object.freeze(obj1);
// obj2.property1 = '20';
// console.log(obj2.property1);


var i = 5; 
for (; i < 5; i++) {
console.log(i);
}