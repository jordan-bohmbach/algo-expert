function binarySearch(array, target) {
    let currentIndex = Math.floor(array.length / 2)
    let searchLength = Math.floor(array.length / 2)

    while (array[currentIndex] !== target) {
        searchLength = Math.floor(searchLength / 2)
        if (array[currentIndex] > target) {
            currentIndex -= searchLength
        } else if (array[currentIndex] < target) {
            currentIndex += searchLength
        } else if (array[currentIndex] === target) {
            break
        }
    }
    return currentIndex
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
                    //    0  1   2   3   4   5   6  7   8   9 
console.log(binarySearch([1, 5, 23, 111], 111))