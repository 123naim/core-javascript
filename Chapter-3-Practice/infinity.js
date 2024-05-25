const isRunning = true;

// while loop
while (isRunning) {
    const rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner Winner chiken dinner babu tumi chiken jitso: ' + rand)
        break;
    } else {
        console.log(`You will got the number: ${rand} so try it continue`)
    }
}

console.log('for loop start now')

for (; ;) {
    const rand = Math.floor(Math.random() * 10 + 1)
    if (rand === 9) {
        console.log('Winner Winner chiken dinner babu tumi chiken jitso: ' + rand)
        break;
    } else {
        console.log(`You will got the number: ${rand} so try it continue`)
    }
}