function riverSizes(matrix) {
    let riverArr = []

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]) {
                // we have found a new river
                let queue = [[[i, j]]] // [[[0,0], [0, 1]], [[2, 0], [3, 0]]]
                let visited = new Set()
                let maxPath = []
                let maxPathLength = 0

                while (queue.length) {
                    let currentPath = queue.shift()
                    let currentEndNode = currentPath[currentPath.length - 1]

                    if (!visited.has(`${currentEndNode[0]},${currentEndNode[1]}`)) {
                        visited.add(`${currentEndNode[0]},${currentEndNode[1]}`)
                        if (currentPath.length > maxPathLength) {
                            maxPathLength = currentPath.length
                            maxPath = currentPath
                        }
                        let children = getNeighboors(currentEndNode[0], currentEndNode[1], matrix)
                        for (let k = 0; k < children.length; k++) {
                            let child = children[k]
                            queue = [...queue, [...currentPath, child]]
                        }
                    }
                }
                visited.forEach(nodeString => {
                    let newI = parseInt(nodeString.split(',')[0])
                    let newJ = parseInt(nodeString.split(',')[1])
                    matrix[newI][newJ] = 0
                })
                riverArr.push(visited.size)
            }
        }
    }
    return riverArr
}

let getNeighboors = (i, j, matrix) => {
    let returnArr = []

    if (matrix[i - 1] && matrix[i - 1][j]) returnArr.push([i - 1, j])
    if (matrix[i + 1] && matrix[i + 1][j]) returnArr.push([i + 1, j])
    if (matrix[i][j - 1]) returnArr.push([i, j - 1])
    if (matrix[i][j + 1]) returnArr.push([i, j + 1])

    return returnArr
}

// console.log(riverSizes([
//     [1, 0, 0, 1, 0],
//     [1, 0, 1, 0, 0],
//     [0, 0, 1, 0, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 0]
// ]))

console.log(riverSizes([
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1]
]))