// basic condition idea
var a = 15;
var b = 10;

if (a > b) {
    console.log('a er value boro')
}
if (a < b) {
    console.log('b er value boro')
}


const person1 = 14;
const person2 = 23;

if (person1 > person2) {
    console.log('person 1 boro')
}
else{
    console.log('person 2 boro')
}

const num1 = 23;

if (num1 % 2 === 1) {
    console.log(num1 + " is odd number")
}
else{
    console.log(num1 + ' is even number')
}

function getOddNumber(a){
    if(a % 2 === 1){
        return console.log('this is a odd number')
    }
    else {
        return console.log('This is a even Number')
    }
}

console.log(getOddNumber(8))