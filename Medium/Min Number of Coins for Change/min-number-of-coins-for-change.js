function minNumberOfCoinsForChange(n, denoms) {
    let targetAmounts = [0]
    for (let i = 0; i < n; i++) {
        targetAmounts.push(Infinity)
    }

    denoms.forEach(denom => {
        targetAmounts.forEach((target, i) => {
            if (i >= denom) {
                let newNum = Math.min(Math.floor(i / denom) + targetAmounts[i % denom], targetAmounts[i - denom]+1)
                if (newNum < targetAmounts[i]) targetAmounts[i] = newNum
            }
        })
    })
    if (targetAmounts[targetAmounts.length - 1] < Infinity) return targetAmounts[targetAmounts.length - 1]
    return -1
}

// console.log(minNumberOfCoinsForChange(7, [1,5,10]))
console.log(minNumberOfCoinsForChange(3, [2 , 1]))
// console.log(minNumberOfCoinsForChange(7, [2, 4]))