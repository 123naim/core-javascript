// Nested Loop

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

let input = 5;
for (let i = 1; i <= input; i++){
    let result = '';
    for (let j = 1; j <= i; j++){
        result += j + ' ';
    }
    console.log(result)
}


// challange
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
let starNumber = 5;

// for (let i = 1; i <= starNumber; i++){
//     let result = ' ';
//     for(let j = 1; j <= starNumber; j++){
//         result +='* ';
//     }
//     console.log(result)
// }
