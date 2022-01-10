function minimumPassesOfMatrix(matrix) {
    let passCount = 0
    let allPositive = false
    let changedOne = false

    while (!allPositive) {
        allPositive = true
        let nodesToChange = []

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] < 0 && !hasPositiveNeighboor(i, j, matrix)) allPositive = false
                if (matrix[i][j] < 0 && hasPositiveNeighboor(i, j, matrix)) {
                    nodesToChange.push([i, j])
                    changedOne = true
                }
            }
        }
        if (!changedOne) return -1
        nodesToChange.forEach(node => {
            matrix[node[0]][node[1]]*=-1
        })
        passCount++
    }
    return passCount
}

let hasPositiveNeighboor = (i, j, matrix) => {
    if (matrix[i - 1] && matrix[i - 1][j] > 0) return true
    if (matrix[i + 1] && matrix[i + 1][j] > 0) return true
    if (matrix[i][j - 1] > 0) return true
    if (matrix[i][j + 1] > 0) return true
    return false
}

// console.log(minimumPassesOfMatrix([
//     [0, -1, -3, 2, 0],
//     [1, -2, -5, -1, -3],
//     [3, 0, 0, -4, -1]
// ]))

console.log(minimumPassesOfMatrix([
    [1, 0, 0, -2, -3],
    [-4, -5, -6, -2, -1],
    [0, 0, 0, 0, -1],
    [-1, 0, 3, 0, 3]
]))