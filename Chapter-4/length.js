let str = 'some text'
let str2 = 'This is nayem'

// let length = 0;
// while(true){
//     if(str.charAt(length) === ''){
//         break;
//     }else{
//         length++;
//     }
// }

function len(string) {
    let length = 0;
    while (true) {
        if (string.charAt(length) === '') {
            break;
        } else {
            length++;
        }
    }
    return length;
}


console.log(len(str))
console.log(len(str2));

const arr = [1, 2, 3, 4, 5, 6];
function len2(arr) {
    let length2 = 0;
    while (true) {
        if (arr[length2] === undefined) {
            break
        } else {
            length2++;
        }
    }
    return length2;
}

console.log(len2(arr))