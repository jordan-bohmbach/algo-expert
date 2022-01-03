function minimumWaitingTime(queries) {
    queries.sort((a, b) => a - b)

    let totalTime = 0
    let runningTime = 0
    for (let i = 1; i < queries.length; i++) {
        runningTime += queries[i - 1]
        totalTime = runningTime + totalTime
    }
    return totalTime
}