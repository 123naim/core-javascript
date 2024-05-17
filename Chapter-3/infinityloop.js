// Infinity For Loop
let isRunning = true;
while(isRunning) {
    let rand = Math.floor(Math.random() * 10 + 1)
    if(rand === 9){
        console.log('Winner Winner Chicken Dinner')
        isRunning = false;
    }else{
        console.log('You have got ' + rand)
    }
}

for (; ;){
    let rand = Math.floor(Math.random() * 10 + 1);
    if(rand === 9){
        console.log('winner winner chicken dinner')
        break
    }else{
        console.log('You have got ' + rand)
    }
}