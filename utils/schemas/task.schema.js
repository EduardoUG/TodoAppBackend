const joi = require('@hapi/joi')

const taskIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const taskTitleSchema = joi.string().max(80)
const taskCompletedSchema = joi.boolean().default(false)

const createTaskSchema = {
  id: taskIdSchema.required(),
  title: taskTitleSchema.required(),
  completed: taskCompletedSchema.required()
}

const updateTaskSchema = {
  id: taskIdSchema,
  title: taskTitleSchema,
  completed: taskCompletedSchema
}

module.exports = {
  taskIdSchema,
  createTaskSchema,
  updateTaskSchema
}

