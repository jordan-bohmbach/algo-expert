function largestRange(array) {
    let longestLength = 0
    let longestStart = 0
    let longestEnd = 0
    let checkedObj = {}
    let currentStart = 0
    let currentEnd = 0

    array.forEach(num => {
        checkedObj[num] = 0
    })

    for (let num in checkedObj) {
        let originalNum = num

        if (checkedObj[num] === 0) { //we have not visited this range yet
            checkedObj[num] = 1 // mark this number as visited once
            currentStart = num
            currentEnd = num

            while (checkedObj[num - 1] === 0) {
                num--
                checkedObj[num] = 1
                currentStart = num
            }

            num = originalNum
            while (checkedObj[num + 1] === 0) {
                num++
                checkedObj[num] = 1
                currentEnd = num
            }

            if (currentEnd - currentStart + 1 > longestLength) {
                longestLength = currentEnd - currentStart + 1
                longestStart = currentStart
                longestEnd = currentEnd
            }
        }
    }
    return [longestStart, longestEnd]
}

console.log(largestRange([19, -1, 18, 17, 2, 10, 3, 12, 5, 16, 4, 11, 8, 7, 6, 15, 12, 12, 2, 1, 6, 13, 14]))