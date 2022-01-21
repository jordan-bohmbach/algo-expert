function boggleBoard(board, words) {
    let foundWords = []

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let currentLetter = board[i][j]

            let queue = [[`${i}-${j}`]]
            let visited = new Set()

            while (queue.length) {
                let currentPath = queue.shift()
                let currentEndNode = currentPath[currentPath.length - 1]

                let checkedWord = checkCurrentPath(currentPath, board, words)
                if (checkedWord.match) foundWords.push(checkedWord.match)

                if (checkedWord.subString) {
                    visited.add(currentEndNode)

                    // get the current End Node's neighboors
                    let endX = parseInt(currentEndNode.split('-')[0])
                    let endY = parseInt(currentEndNode.split('-')[1])
                    let neighboors = getNeighboors(endX, endY, board)

                    // Create a new path for each one and push it onto the queue
                    let newPaths = []
                    neighboors.forEach(neighboor => {
                        if (!currentPath.includes(neighboor)) newPaths.push([...currentPath, neighboor])
                    })
                    queue = [...queue, ...newPaths]
                }
            }
        }
    }

    return Array.from(new Set(foundWords))
}

const checkCurrentPath = (pathArr, board, words) => {
    let wordArr = pathArr.map(node => board[parseInt(node.split('-')[0])][parseInt(node.split('-')[1])])
    let word = wordArr.join('')
    let returnObj = {}

    if (words.includes(word)) {
        returnObj['match'] = word
    }

    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(word)) {
            returnObj['subString'] = true
        }
    }

    return returnObj
}

const getNeighboors = (i, j, board) => {
    let neighboors = []

    let up = board[i - 1]
    let down = board[i + 1]
    let left = board[i][j - 1]
    let right = board[i][j + 1]

    if (up) {
        neighboors.push(`${i - 1}-${j}`)
        if (right) neighboors.push(`${i - 1}-${j + 1}`)
        if (left) neighboors.push(`${i - 1}-${j - 1}`)
    }

    if (down) {
        neighboors.push(`${i + 1}-${j}`)
        if (right) neighboors.push(`${i + 1}-${j + 1}`)
        if (left) neighboors.push(`${i + 1}-${j - 1}`)
    }

    if (right) neighboors.push(`${i}-${j + 1}`)
    if (left) neighboors.push(`${i}-${j - 1}`)

    return neighboors
}

const board = [
        ["t", "h", "i", "s", "i", "s", "a"],
        ["s", "i", "m", "p", "l", "e", "x"],
        ["b", "x", "x", "x", "x", "e", "b"],
        ["x", "o", "g", "g", "l", "x", "o"],
        ["x", "x", "x", "D", "T", "r", "a"],
        ["R", "E", "P", "E", "A", "d", "x"],
        ["x", "x", "x", "x", "x", "x", "x"],
        ["N", "O", "T", "R", "E", "-", "P"],
        ["x", "x", "D", "E", "T", "A", "E"]
]

const words = ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]

const board2 = [
        ["f", "t", "r", "o", "p", "i", "k", "b", "o"],
        ["r", "w", "l", "p", "e", "u", "e", "a", "b"],
        ["j", "o", "t", "s", "e", "l", "f", "l", "p"],
        ["s", "z", "u", "t", "h", "u", "o", "p", "i"],
        ["k", "a", "e", "g", "n", "d", "r", "g", "a"],
        ["h", "n", "l", "s", "a", "t", "e", "t", "x"]
    ]

const words2 = ["frozen", "rotten", "teleport", "city", "zutgatz", "kappa", "before", "rope", "obligate", "annoying"]

// console.log(boggleBoard(board, words))
console.log(boggleBoard(board2, words2))