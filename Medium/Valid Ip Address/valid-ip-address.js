function validIPAddresses(string) {
    let validIPs = []
    let dotIndecies = [1, 3, 5]
    let currentIp = string[0] + '.' + string[1] + '.' + string[2] + '.' + string.slice(3)

    let count = 0
    while (1) {
        if (count > 20) break
        if (isValid(currentIp)) validIPs.push(currentIp)

        if (dotIndecies[0] === currentIp.length - 6 &&
            dotIndecies[1] === currentIp.length - 4 &&
            dotIndecies[2] === currentIp.length - 2) break

        if (dotIndecies[2] < currentIp.length - 2) {
            dotIndecies[2]++
        } else if (dotIndecies[1] < currentIp.length - 4) {
            dotIndecies[1]++
            dotIndecies[2] = dotIndecies[1] + 2
        } else {
            dotIndecies[0]++
            dotIndecies[1] = dotIndecies[0] + 2
            dotIndecies[2] = dotIndecies[1] + 2
        }

        currentIp = string.slice(0, dotIndecies[0]) + '.' +
            string.slice(dotIndecies[0], dotIndecies[1] - 1) + '.' +
            string.slice(dotIndecies[1] - 1, dotIndecies[2] - 2) + '.' +
            string.slice(dotIndecies[2] - 2)

        count++
        console.log('currentIp = ', currentIp)
        console.log('dotIndecies = ', dotIndecies)
    }
    return validIPs;
}

let isValid = (str) => {
    let parts = str.split('.')
    let valid = true

    parts.forEach(part => {
        if (part[0] === '0' && part[1]) valid = false
        if (parseInt(part) > 255) valid = false
    })
    return valid
}

console.log(validIPAddresses("1921680"))