const obj = {
    x: 10,
    y: 20,
    z: 15
}


// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// let obj2 = obj;
// obj2.x = 70;
// obj2.y = 100;

// console.log(obj)
// console.log(obj2)

var obj2 = Object.assign({}, obj)
obj2.x = 70;
obj2.y = 100;

console.log(obj)
console.log(obj2)
