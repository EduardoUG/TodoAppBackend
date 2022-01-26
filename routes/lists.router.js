const express = require('express')
const router = express.Router()
const ListService = require('../services/list.service')
const listService = new ListService()
const {
  listIdSchema,
  createListSchema,
  updateListSchema
} = require('../utils/schemas/list.schema')
const validationHandler = require('../middlewares/validationHandler')

// List all lists
router.get('/', (req, res) => {
  const lists = listService.getLists()
  const response = {
    message: 'Lists listed',
    data: lists
  }
  res.status(200).json(response)
})

// List an  specific list
router.get(
  '/:listId',
  validationHandler({ listId: listIdSchema }, 'params'),
  (req, res) => {
    const { listId } = req.params
    const list = listService.getList({ listId })

    if (list) {
      const response = {
        message: 'lists listed',
        data: list
      }

      res.status(200).json(response)
    } else {
      const response = {
        message: 'list not found'
      }

      res.status(404).json(response)
    }
  }
)

// Create a new list
router.post('/', validationHandler(createListSchema), (req, res) => {
  const { body: list } = req
  const newlist = listService.createList({ list })

  res.status(201).json({
    message: 'list created',
    data: newlist
  })
})

// Update a list
router.patch(
  '/:listId',
  validationHandler({ listId: listIdSchema }, 'params'),
  validationHandler(updateListSchema),
  (req, res) => {
    const { listId } = req.params
    const { body: list } = req
    const updatedList = listService.updateList({ listId, list })

    if (updatedList) {
      const response = {
        message: 'list updated',
        data: updatedList
      }

      res.status(200).json(response)
    } else {
      const response = {
        message: 'list not found'
      }

      res.status(404).json(response)
    }
  }
)

// Delete a list
router.delete(
  '/:listId',
  validationHandler({ listId: listIdSchema }, 'params'),
  (req, res) => {
    const { listId } = req.params
    const deletedList = listService.deleteList({ listId })

    if (deletedList) {
      res.status(200).json({
        message: 'list deleted'
      })
    } else {
      const response = {
        message: 'list not found'
      }
      res.status(404).json(response)
    }
  }
)

module.exports = router
