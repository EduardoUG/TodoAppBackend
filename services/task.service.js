const tasks = [
  {
    userId: 1,
    id: '5fa6db2d022e2e0a9d15bcda',
    title: 'delectus aut autem',
    completed: false,
    listId: 1
  },
  {
    userId: 1,
    id: '5fa6db2d022e2e0a9d15bcdb',
    title: 'quis ut nam facilis et officia qui',
    completed: false,
    listId: 2
  },
  {
    userId: 1,
    id: '5fa6db2d022e2e0a9d15bcdc',
    title: 'fugiat veniam minus',
    completed: false,
    listId: 2
  },
  {
    userId: 1,
    id: '5fa6db2d022e2e0a9d15bcdd',
    title: 'et porro tempora',
    completed: true,
    listId: 2
  },
  {
    userId: 1,
    id: '5fa6db2d022e2e0a9d15bcde',
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
    listId: 1
  }
]

class TaskService {
  constructor () {}

  getTasks () {
    return tasks || null
  }

  getTask ({ taskId }) {
    const task = tasks.find(task => task.id === taskId)

    return task || null
  }

  createTask ({ task }) {
    tasks.push(task)
    return task
  }

  updateTask ({ taskId, task }) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    if (tasks[taskIndex]) {
      tasks[taskIndex] = {
        ...tasks[taskIndex],
        ...task
      }

      return tasks[taskIndex]
    } else {
      return null
    }
  }

  deleteTask ({ taskId }) {
    const taskIndex = tasks.findIndex(task => task.id === taskId)

    if (tasks[taskIndex]) {
      tasks.splice(taskIndex, 1)

      return taskId
    } else {
      return null
    }
  }
}

module.exports = TaskService
