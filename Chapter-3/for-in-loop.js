const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += ' ' + person[x];
}
console.log(text)


const numbers = [45, 4, 9, 16, 25];

let sum = 0;
for (let x in numbers) {
  sum += numbers[x]
}
console.log(sum)