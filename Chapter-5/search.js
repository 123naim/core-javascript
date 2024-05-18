// Search Data
const arr = [ 4, 5, 2, 6, 8, 4, 55, 9, 89, 27 ];

const find = 8;
let isFound = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find){
        console.log('Data Found at Index' + ' ' + i);
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log('Data Not Found')
}

const findCallback = arr.find((element) => element == 5)
console.log(findCallback)
