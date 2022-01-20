function phoneNumberMnemonics(phoneNumber) {
    const associations = {
        1: '1',
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
        0: '0'
    }
    return recursiveMnemonics(phoneNumber, associations, currentMnemonic = '', mnemonicsList = [])
}

let recursiveMnemonics = (remainingPhoneNumber, associations, currentMnemonic, mnemonicsList) => {
    if (!remainingPhoneNumber.length) mnemonicsList.push(currentMnemonic)

    for (let i = 0; i < remainingPhoneNumber.length; i++) {
        let currentKey = remainingPhoneNumber[0]
        let currentLetters = associations[currentKey].split('')
        let newRemainingPhone = remainingPhoneNumber.slice(1)
        for (let j = 0; j < currentLetters.length; j++) {
            let letter = currentLetters[j]
            recursiveMnemonics(newRemainingPhone, associations, currentMnemonic.concat(letter), mnemonicsList)
        }
    }
    return mnemonicsList
}

console.log(phoneNumberMnemonics('1905'))