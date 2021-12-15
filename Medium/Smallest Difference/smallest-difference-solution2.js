function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    let arrayOneIndex = 0
    let arrayTwoIndex = 0
    let currentSmallest = Infinity
    let returnArr = []

    while (arrayOneIndex <= arrayOne.length - 1 && arrayTwoIndex <= arrayTwo.length - 1) {
        let numOne = arrayOne[arrayOneIndex]
        let numTwo = arrayTwo[arrayTwoIndex]

        if (Math.abs(numOne - numTwo) < currentSmallest) {
            currentSmallest = Math.abs(numOne - numTwo)
            returnArr = [numOne, numTwo]
        }
        if (numOne < numTwo && arrayOneIndex < arrayOne.length - 1) {
            arrayOneIndex++
        } else {
            arrayTwoIndex++
        }
    }
    return returnArr
}


console.log(smallestDifference(
    [-1, 5, 10, 20, 28, 3],
    [26, 134, 135, 15, 17]
))

console.log(smallestDifference(
    [240, 124, 86, 111, 2, 84, 954, 27, 89],
    [1, 3, 954, 19, 8]
))