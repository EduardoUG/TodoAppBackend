const express = require('express')
const router = express.Router()

const lists = [
  {
    id: 1,
    name: 'Work',
    userId: 1
  },
  {
    id: 1,
    name: 'Personal',
    userId: 1
  }
]

// List all lists
router.get('/', (req, res) => {
  const response = {
    message: 'Lists listed',
    data: lists
  }
  res.status(200).json(response)
})

// List an  specific list
router.get('/:id', (req, res) => {
  const { id } = req.params
  const list = lists.find(list => list.id === parseInt(id))

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
})

// Create a new list
router.post('/', (req, res) => {
  const list = req.body
  lists.push(list)
  res.status(201).json({
    message: 'list created',
    data: list
  })
})

// Update a list
router.patch('/:id', (req, res) => {
  const { id } = req.params
  const newList = req.body
  const listIndex = lists.findIndex(list => list.id === parseInt(id))

  if (lists[listIndex]) {

    lists[listIndex] = {
      ...lists[listIndex],
      ...newList
    }

    const response = {
      message: 'list updated',
      data: lists[listIndex]
    }
    res.status(200).json(response)
  } else {
    const response = {
      message: 'list not found'
    }
    res.status(404).json(response)
  }
})

// Delete a list
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const listIndex = lists.findIndex(list => list.id === parseInt(id))

  if (lists[listIndex]) {
    lists.splice(listIndex, 1)
    res.status(200).json({
      message: 'list deleted'
    })
  }else {
    const response = {
      message: 'list not found'
    }
    res.status(404).json(response)
  }

})

module.exports = router