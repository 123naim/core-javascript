let firstName = 'Nayem';

const fullName = firstName ? firstName : 'Nayem' + ' Iqbal';
console.log(fullName)


const anatherWayFindFullName = firstName || 'my name is nayem';
console.log(anatherWayFindFullName)


const isOk = true;

isOk && console.log('Sobthik Tak')

const result = isOk ? 'Every thing is Ok' : 'Every thing is not Ok';

console.log(result)



// const fName = true;
// const tName = fName ? 'naim' : 'Nayem ' + 'Iqbal';
// console.log(tName)
// print hbe: 'naim'

// const fName = null;
// const tName = fName ? 'naim' : 'Nayem ' + 'Iqbal';
// console.log(tName)
// print hbe: 'Nayem Iqbal'

// const fName = 'Nayem';
// const tName = fName ? 'naim' : 'Nayem ' + 'Iqbal';
// console.log(tName)
// print hbe: 'naim'

// const fName = 'Nayem';
// const tName = fName ? fName : 'Nayem ' + 'Iqbal';
// console.log(tName)
// print hbe: 'Nayem'