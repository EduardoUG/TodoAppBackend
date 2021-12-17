const express = require('express')
const router = express.Router()

const tasks = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false
  }
]

// List all tasks
router.get('/', (req, res) => {
  const response = {
    message: 'tasks listed',
    data: tasks
  }
  res.status(200).json(response)
})

// List an  specific task
router.get('/:id', (req, res) => {
  const { id } = req.params
  const task = tasks.find(task => task.id === parseInt(id))

  if (task) {
    const response = {
      message: 'task listed',
      data: task
    }
    res.status(200).json(response)
  } else {
    const response = {
      message: 'task not found'
    }
    res.status(404).json(response)
  }
})

// Create a new task
router.post('/', (req, res) => {
  const task = req.body
  tasks.push(task)
  res.status(201).json({
    message: 'task created',
    data: task
  })
})

// Update a task
router.patch('/:id', (req, res) => {
  const { id } = req.params
  const newTask = req.body
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id))

  if (tasks[taskIndex]) {

    tasks[taskIndex] = {
      ...tasks[taskIndex],
      ...newTask
    }

    const response = {
      message: 'task updated',
      data: tasks[taskIndex]
    }
    res.status(200).json(response)
  } else {
    const response = {
      message: 'task not found'
    }
    res.status(404).json(response)
  }
})

// Delete a task
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const taskIndex = tasks.findIndex(task => task.id === parseInt(id))

  if (tasks[taskIndex]) {
    tasks.splice(taskIndex, 1)
    res.status(200).json({
      message: 'task deleted'
    })
  }else {
    const response = {
      message: 'task not found'
    }
    res.status(404).json(response)
  }

})

module.exports = router
