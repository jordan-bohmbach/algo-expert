function binarySearch(array, target) {
    let left = 0
    let right = array.length - 1


    while (left <= right) {
        middle = Math.floor((right + left) / 2)
        if (array[middle] < target) {
            left = middle + 1
        }
        if (array[middle] > target) {
            right = middle - 1
        }
        if (array[middle] === target) return middle
    }
    return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
//    0  1   2   3   4   5   6  7   8   9 
console.log(binarySearch([1, 5, 23, 111], 111))