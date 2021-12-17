function findClosestValueInBst(tree, target) {
    let closestDistance = Infinity
    let closestValue

    while (1) {
        let currentDistance = Math.abs(tree.value - target)
        if (currentDistance < closestDistance) {
            closestDistance = currentDistance
            closestValue = tree.value
        }

        if (tree.value < target) {
            if (!tree.right) return closestValue
            tree = tree.right
        } else {
            if (!tree.left) return closestValue
            tree = tree.left
        }
    }
}