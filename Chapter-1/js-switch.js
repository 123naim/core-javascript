const date = new Date();

// 0 - Sunday, 1 - Monday, 2 - tuesday
const today = date.getDay();
console.log(today)

if (today === 0) {
    console.log('Today is Sunday')
} else if (today === 1) {
    console.log('Today is Munday')
} else if (today === 2) {
    console.log('Today is Tuesday')
} else if (today === 3) {
    console.log('Today is Wednesday')
} else if (today === 4) {
    console.log('Today is Thursday')
} else if (today === 5) {
    console.log('Today is Friday')
} else if (today === 6) {
    console.log('Today is Saturday')
}


switch (today) {
    case 0:
        console.log('Today is Sunday')
        break;
    case 1:
        console.log('Today is Munday')
        break;
}

// switch (today) {
//     case 0:
//         console.log('Today is Sunday')
//         break;
//     case 1:
//         console.log('Today is Monday')
//         break;
//     case 2:
//         console.log('Today is Tuesday')
//         break;
//     case 3:
//         console.log('Today is Wednesday')
//         break;
//     case 4:
//         console.log('Today is Thursday')
//         break;
//     case 5:
//         console.log('Today is Friday')
//         break;
//     case 6:
//         console.log('Today is Saturday')
//         break;
//     default: console.log('Not a valid Number')
// }