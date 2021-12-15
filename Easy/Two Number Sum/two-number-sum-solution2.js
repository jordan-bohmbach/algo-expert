function twoNumberSum(array, targetSum) {
    let numObject = {}
    let returnArr = []

    array.forEach(num => {
        if (numObject[targetSum - num]) {
            returnArr = [num, targetSum-num]
        }
        numObject[num] = num
    })
    return returnArr
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))