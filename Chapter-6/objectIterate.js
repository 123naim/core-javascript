const obj = {
    x: 10,
    y: 20,
    z: 15
}

console.log('z' in obj)
console.log('p' in obj)

for (let i in obj){
    console.log(i + ': ' + obj[i])
}