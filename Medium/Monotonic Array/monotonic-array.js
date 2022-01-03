function isMonotonic(array) {
    if (array.length <= 1) return true

    let increasing
    if (array[array.length - 1] > array[0]) {
        increasing = true
    } else if (array[array.length - 1] < array[0]) {
        increasing = false
    }

    let lastNum = array[0]

    for (let i = 1; i < array.length; i++) {
        if (increasing) {
            if (array[i] < lastNum) return false
        } else {
            if (array[i] > lastNum) return false
        }
        lastNum = array[i]
    }
    return true
}