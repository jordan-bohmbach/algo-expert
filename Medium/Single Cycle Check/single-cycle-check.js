function hasSingleCycle(array) {
    let visited = array.map(num => 0)
    let index = 0
    let count = 0

    while (count < array.length) {
        if (visited[index]) return false

        visited[index] = 1
        index = (index + array[index]) % array.length

        while(index < 0){
            index += array.length
        } 
            
        count++
    }
    if(index === 0) return true
    return false
}

// console.log(hasSingleCycle([2, 3, 1, -4, -4, 2]))
console.log(hasSingleCycle([1, 1, 1, 1, 2]))