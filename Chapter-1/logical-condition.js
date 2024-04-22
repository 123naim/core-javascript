// && || !


// A && B
// true && true = true
// true && false = false
// fasle && true = false
// false && false - fase


// A || B
// true || true = true
// true || false = true
// false || true = true
// false || false = false


const a = 10;
const b = 20
const c = 30;
const d = 40;

if(a > b && c > d){
    console.log('A is greater than B and C is greater than D')
}else{
    console.log('At least one condition is false')
}


if (a > b || c < d){
    console.log('A is greater than B or C is lessthan D')
}else{
    console.log('they are both condition false')
}

const check = !!(a > b)
console.log(check)
