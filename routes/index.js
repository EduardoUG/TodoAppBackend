const express = require('express')
const tasksRouter = require('./tasks.router')
const listRouter = require('./lists.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/tasks', tasksRouter)
  router.use('/lists', listRouter)
}

module.exports = routerApi