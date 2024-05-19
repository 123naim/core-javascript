const point = {
    x: 10,
    y: 20,
    z: 15
}

point.a = 100;
console.log(point)

point.a = undefined;
console.log(point)


delete point.a
console.log(point)


// const del = delete point.a
// console.log(del)
