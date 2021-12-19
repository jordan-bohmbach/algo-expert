function largestRange(array) {
    // solving in O(n log n) time. This can be solved more optimally in O(n) time which I will implement in solution #2

    array.sort((a, b) => parseInt(a) - parseInt(b))
    let longestArrayLength = 0
    let currentArrayLength = 1
    let longestArrayStartValue = array[0]
    let longestArrayEndValue = array[0]
    let currentArrayStartValue = array[0]
    let currentArrayEndValue = array[0]

    for (let i = 1; i < array.length; i++) {
        currentArrayLength++

        if (array[i] === array[i - 1]) continue

        if (array[i] === array[i - 1] + 1) {
            currentArrayLength++
            currentArrayEndValue = array[i]
        } else {
            currentArrayStartValue = array[i]
            currentArrayEndValue = array[i]
            currentArrayLength = 1
        }

        if (currentArrayLength > longestArrayLength) {
            longestArrayLength = currentArrayLength
            longestArrayStartValue = currentArrayStartValue
            longestArrayEndValue = currentArrayEndValue
        }
    }
    return [longestArrayStartValue, longestArrayEndValue]
}