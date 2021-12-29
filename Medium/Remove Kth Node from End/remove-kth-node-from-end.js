function removeKthNodeFromEnd(head, k) {
    let listLength = 0
    let currentNode = head

    while (currentNode) {
        currentNode = currentNode.next
        listLength++
    }

    currentNode = head
    for (let i = 0; i < listLength - k - 1; i++) {
        currentNode = currentNode.next
    }

    if (k === listLength) {
        head.value = head.next.value
        head.next = head.next.next
    } else {
        currentNode.next = currentNode.next.next
    }
}