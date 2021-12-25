function minNumberOfCoinsForChange(n, denoms) {
    let minConfigurations = new Array(n + 1).fill(Infinity)
    minConfigurations[0] = 0

    denoms.forEach(coinSize => {
        for (let i = 1; i < minConfigurations.length; i++) {
            if (i - coinSize >= 0) {
                minConfigurations[i] = Math.min(minConfigurations[i], minConfigurations[i - coinSize] + 1)
            }
        }
    })
    if (minConfigurations[minConfigurations.length - 1] !== null) return minConfigurations[minConfigurations.length - 1]
    return -1
}

// console.log(minNumberOfCoinsForChange(7, [1,5,10]))
// console.log(minNumberOfCoinsForChange(3, [2 , 1]))
console.log(minNumberOfCoinsForChange(7, [2, 4]))
// console.log(minNumberOfCoinsForChange(6, [2, 3]))