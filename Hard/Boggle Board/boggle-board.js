function boggleBoard(board, words) {
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            let currentLetter = board[i][j]

            let queue = [[`${i}-${j}`]]
            let visited = new Set()

            while(queue.length){
                let currentPath = queue.shift()
                let currentEndNode = currentPath[currentPath.length-1]

                checkCurrentPath(currentPath, board)

                if(!visited.has(currentEndNode)){
                    visited.add(currentEndNode)

                    // get the current End Node's neighboors
                    let neighboors = getNeighboors(i, j, board)

                    // Create a new path for each one and push it onto the queue
                    let newPaths = []
                    neighboors.forEach(neighboor => {
                        newPaths.push([...queue, neighboor])
                    })
                    queue = [...queue, ...newPaths]
                }
            }
        }
    }
}

const checkCurrentPath = (pathArr, board) => {
    console.log('pathArr = ', pathArr)
    let word = pathArr.map(node => board[parseInt(node.split('-')[0])][parseInt(node.split('-')[1])])
    console.log('word = ', word)
}

const getNeighboors = (i, j, board) => {
    let neighboors = []

    let up = board[i-1]
    let down = board[i+1]
    let left = board[i][j-1]
    let right = board[i][j+1]

    if(up){
        neighboors.push(`${i - 1}-${j}`)
        if (right) neighboors.push(`${i - 1}-${j + 1}`)
        if (left) neighboors.push(`${i - 1}-${j - 1}`)
    } 

    if(down){
        neighboors.push(`${i + 1}-${j}`)        
        if (right) neighboors.push(`${i + 1}-${j + 1}`)
        if (left) neighboors.push(`${i + 1}-${j - 1}`)
    }

    if(right) neighboors.push(`${i}-${j + 1}`)
    if(left) neighboors.push(`${i}-${j - 1}`)

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

console.log(boggleBoard(board, words))
// console.log(getNeighboors(0, 0, board))