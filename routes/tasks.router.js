const express = require('express')
const router = express.Router()
const TaskService = require('../services/task.service')
const {
  taskIdSchema,
  createTaskSchema,
  updateTaskSchema
} = require('../utils/schemas/task.schema')
const validationHandler = require('../middlewares/validationHandler')

const taskService = new TaskService()

// List all tasks
router.get('/', (req, res) => {
  const tasks = taskService.getTasks()

  const response = {
    message: 'tasks listed',
    data: tasks
  }
  res.status(200).json(response)
})

// List an  specific task
router.get(
  '/:taskId',
  validationHandler({ taskId: taskIdSchema }, 'params'),
  (req, res) => {
    const { taskId } = req.params
    const task = taskService.getTask({ taskId })

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
  }
)

// Create a new task
router.post('/', validationHandler(createTaskSchema), (req, res) => {
  const task = req.body
  const newTask = taskService.createTask({ task })

  res.status(201).json({
    message: 'task created',
    data: newTask
  })
})

// Update a task
router.patch(
  '/:taskId',
  validationHandler({ taskId: taskIdSchema }, 'params'),
  validationHandler(updateTaskSchema),
  (req, res) => {
    const { taskId } = req.params
    const { body: task } = req
    const updatedTask = taskService.updateTask({ taskId, task })

    if (updatedTask) {
      const response = {
        message: 'task updated',
        data: updatedTask
      }

      res.status(200).json(response)
    } else {
      const response = {
        message: 'task not found'
      }
      res.status(404).json(response)
    }
  }
)

// Delete a task
router.delete(
  '/:taskId',
  validationHandler({ taskId: taskIdSchema }, 'params'),
  (req, res) => {
    const { taskId } = req.params
    const deletedTask = taskService.deleteTask({ taskId })

    if (deletedTask) {
      res.status(200).json({
        message: 'task deleted'
      })
    } else {
      const response = {
        message: 'task not found'
      }
      res.status(404).json(response)
    }
  }
)

module.exports = router
