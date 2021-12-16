// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let oneArr = []
    let twoArr = []

    while (linkedListOne.next) {
        oneArr.unshift(linkedListOne.value)
        linkedListOne = linkedListOne.next
    }
    oneArr.unshift(linkedListOne.value)

    while (linkedListTwo.next) {
        twoArr.unshift(linkedListTwo.value)
        linkedListTwo = linkedListTwo.next
    }
    twoArr.unshift(linkedListTwo.value)

    let numOne = parseInt(oneArr.join(''))
    let numTwo = parseInt(twoArr.join(''))
    let returnArr = `${numOne + numTwo}`.split('')

    let linkedArr = returnArr.map(num => new LinkedList(parseInt(num)))

    for (let i = linkedArr.length - 1; i > 0; i--) {
        linkedArr[i].next = linkedArr[i - 1]
    }

    return linkedArr[linkedArr.length - 1]

}

let linkedList1a = new LinkedList(2)
let linkedList1b = new LinkedList(4)
let linkedList1c = new LinkedList(7)
let linkedList1d = new LinkedList(1)
linkedList1a.next = linkedList1b
linkedList1b.next = linkedList1c
linkedList1c.next = linkedList1d

let linkedList2a = new LinkedList(9)
let linkedList2b = new LinkedList(4)
let linkedList2c = new LinkedList(5)
linkedList2a.next = linkedList2b
linkedList2b.next = linkedList2c

console.log(sumOfLinkedLists(linkedList1a, linkedList2a))