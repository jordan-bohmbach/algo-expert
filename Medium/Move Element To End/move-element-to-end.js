function moveElementToEnd(array, toMove) {
    let startIndex = 0
    let endIndex = array.length-1

    while(startIndex < endIndex){
        let startNum = array[startIndex]
        let endNum = array[endIndex]

        if(startNum === toMove){
            if(endNum === toMove){
                endIndex--
            } else {
                array[startIndex] = endNum
                array[endIndex] = startNum
                startIndex++
                endIndex--
            }
        } else {
            startIndex++
        }
    }
    return array
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2],2))