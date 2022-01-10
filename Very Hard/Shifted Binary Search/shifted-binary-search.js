function shiftedBinarySearch(array, target) {
    console.log('array = ', array)

    let left = 0
    let right = array.length - 1

    while (left < right) {
        let middle = Math.floor((left + right) / 2)

        if (array[middle] >= array[left]){
            left = middle
        } else {
            right = middle
        }
        if (left === right) return left
    }
    console.log('shiftIndex = ', left)
}

console.log(shiftedBinarySearch([45, 61, 71, 72, 73, 0, 1, 21, 33, 37], 33))