function smallestDifference(arrayOne, arrayTwo) {
    let currentSmallest = Infinity
    let returnArr = []

    arrayOne.forEach(oneNum => {
        arrayTwo.forEach(twoNum => {
            if (Math.abs(oneNum - twoNum) < currentSmallest) {
                returnArr = [oneNum, twoNum]
                currentSmallest = Math.abs(oneNum - twoNum)
            }
        })
    })
    return returnArr
}

console.log(smallestDifference(
    [-1, 5, 10, 20, 28, 3],
    [26, 134, 135, 15, 17]
))