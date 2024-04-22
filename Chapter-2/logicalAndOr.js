let firstName = 'nayem';

const fullName = firstName ? firstName : 'Nayem' + ' Iqbal';
console.log(fullName)



const anatherWayFindFullName = firstName || 'Nayem';
console.log(anatherWayFindFullName)


const isOk = false;

isOk && console.log('Sobthik Tak')

const result = isOk ? 'Every thing is Ok' : 'Every thing is not Ok';

console.log(result)