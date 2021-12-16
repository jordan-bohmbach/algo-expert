function invertBinaryTree(tree) {
    if (!tree.left && !tree.right) {
        return tree
    }

    if (tree.left && !tree.right) {
        tree.right = tree.left
        tree.left = null
        invertBinaryTree(tree.right)
        return tree
    }

    if (!tree.left && tree.right) {
        tree.left = tree.right
        tree.right = null
        invertBinaryTree(tree.left)
        return tree
    }

    let tempLeft = tree.left
    let tempRight = tree.right
    tree.left = tempRight
    tree.right = tempLeft

    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)

    return tree
}