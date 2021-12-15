function threeNumberSum(array, targetSum) {
    let numObject = {}
    let returnArr = []

    array.forEach((num, i) => {
        let innerObject = {}
        let innerTarget = targetSum - num
        let innerArray = array.slice(i + 1, array.length)

        innerArray.forEach(innerNum => {
            if (innerObject[innerTarget - innerNum] != null) returnArr.push([num, innerNum, innerTarget - innerNum].sort())
            innerObject[innerNum] = innerNum
        })
    })
    return returnArr.sort((a, b) => ((a[0] - b[0]) * 100) + ((a[1] - b[1]) * 10) + (a[2] - b[2]))
}

// console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0))