function spiralTraverse(array) {
    return recursiveHelper(array, [])
}

let recursiveHelper = (matrix, returnArr) => {
    if (!matrix.length) return returnArr

    let rows = matrix.length
    let columns = matrix[0].length

    if (rows === 1) {
        for (let i = 0; i < columns; i++) {
            returnArr.push(matrix[0][i])
        }
        return recursiveHelper([], returnArr)
    }

    if (columns === 1) {
        for( let i=0; i<rows; i++){
            returnArr.push(matrix[i][0])
        }
        return recursiveHelper([], returnArr)
    }

    for (let i = 0; i < columns; i++) {
        returnArr.push(matrix[0][i])
    }
    for (let i = 1; i < rows; i++) {
        returnArr.push(matrix[i][columns-1])
    }
    for (let i = columns; i > 1; i--) {
        returnArr.push(matrix[rows - 1][i - 2])
    }
    for (let i = rows; i > 2; i--) {
        returnArr.push(matrix[i - 2][0])
    }

    let newMatrix = []
    matrix.forEach((row, i) => {
        if (i > 0 && i <= matrix.length - 2) {
            if (matrix[i].slice(1, matrix[i].length - 1).length){
                newMatrix.push(matrix[i].slice(1, matrix[i].length - 1))
            }
        }
    })
    return recursiveHelper(newMatrix, returnArr)
}

// console.log(spiralTraverse([
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7]
// ]))

// console.log(spiralTraverse([
//     [1, 2, 3],
//     [12, 13, 4],
//     [11, 14, 5],
//     [10, 15, 6],
//     [9, 8, 7]
// ]))

console.log(spiralTraverse([
    [1, 11],
    [2, 12],
    [3, 13],
    [4, 14],
    [5, 15],
    [6, 16],
    [7, 17],
    [8, 18],
    [9, 19],
    [10, 20]
]))