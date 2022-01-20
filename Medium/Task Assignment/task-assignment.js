function taskAssignment(k, tasks) {
    // Find the minimum of the largest total pairing of tasks
    let returnArr = []
    let pairedTasks = tasks.map((task, i) => {
        return {'task' : task, 'originalIndex' : i}
    }).sort((a, b) => a.task - b.task)
    

    // [[task1, task2], [task1, task2].... [task1, task2]]
    // return the pairs in any order
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]))