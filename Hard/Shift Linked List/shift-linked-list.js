function shiftLinkedList(head, k) {
    if (k > 0) {
        for (let i = 0; i < k; i++) {
            let currentNode = head
            let oldHead = head
            while (currentNode.next.next) {
                currentNode = currentNode.next
            }

            head = currentNode.next
            head.next = oldHead
            currentNode.next = null

        }
        return head
    } else {
        for (let i = k; i < 0; i++) {
            let oldHead = head
            let currentNode = head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            head = head.next
            oldHead.next = null
            currentNode.next = oldHead

        }
        return head
    }


}