function cycleInGraph(edges) {
    for (let i = 0; i < edges.length; i++) {
        let queue = [[i]]

        while (queue.length) {
            let currentPath = queue.shift()
            let currentEndNode = currentPath[currentPath.length - 1]
            let currentChildrenArray = edges[currentEndNode]

            if (currentChildrenArray) {
                for (let j = 0; j < currentChildrenArray.length; j++) {
                    let currentChild = currentChildrenArray[j]
                    if (currentPath.indexOf(currentChild) !== -1) return true
                    queue = [...queue, [...currentPath, currentChild]]
                }
            }
        }
    }
    return false
}

console.log(cycleInGraph([
    [1, 3],
    [2, 3, 4],
    [0],
    [],
    [2, 5],
    [],
]))