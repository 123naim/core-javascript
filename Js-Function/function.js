// function declearation
function firstFunction() {
    console.log('first function call')
}


// function add
function add() {
    const a = 10;
    const b = 20;
    console.log(a + b)
}


// function sub
function sub() {
    const a = 50;
    const b = 20;
    console.log(a - b)
}

// function array sum 
function sum() {
    const array = [1, 2, 3, 4, 5, 6]
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}

// function call
firstFunction();
add();
sub();
sum();

for (let i = 1; i < 6; i++){
    console.log(add())
}