// type finding 
// const str = 'String Literals'
// const str2 = String('Something')
// const str3 = new String('what does type')

// console.log(typeof str)
// console.log(typeof str2)
// console.log(typeof str3)


// convert number to string
const n = 10;
// not a right way
// const str = n + '';
// console.log(str)


// right way
// const str2 = String(n)
// console.log(typeof str2)


// ***** String Comparison ***** //
// let a = 'AAA';
// let b = 'a';
// console.log(a < b)

console.log('1' == 1);

const a = 'This is'
const b = 'Nayem'
const c = a.concat(' ' + b)
const d = c.slice(1, 6)
console.log(d)

console.log(c.charAt());
console.log(c.startsWith('T'))
console.log(c.endsWith('Nayem'))
console.log(c.toLocaleLowerCase())
console.log(c.toUpperCase())
console.log('     add      '.trim());
console.log(c.split(' '));
console.log(0.1 + 0.2 === 0.3)
console.log('4' === 4)
console.log('5' + 3)

// ekhane type number hoye minus hoye jabe
console.log('5' - 3)
console.log(typeof ('x' === 'y'))


const boolean = true;
console.log(typeof boolean)
