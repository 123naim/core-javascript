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

function len(string){
    let length = 0;
    while(true){
        if(string.charAt(length) === ''){
            break;
        }else{
            length++;
        }
    }
    return length;
}

console.log(len(str))
console.log(len(str2))