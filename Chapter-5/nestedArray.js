const arr = [
    [2, 54, 6, 3, 5],
    [4, 56, 32, 6],
    [7, 34, 56, 7, 1]
]

// console.log(arr[0][1])

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log('Element ' + i + ' : ' + arr[i][j])
    }
}