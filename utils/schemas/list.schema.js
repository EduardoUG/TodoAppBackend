const joi = require('@hapi/joi')

const listIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/)
const listNameSchema = joi.string().max(80)

const createListSchema = {
  id: listIdSchema.required(),
  name: listNameSchema.required()
}

const updateListSchema = {
  id: listIdSchema,
  name: listNameSchema
}

module.exports = {
  listIdSchema,
  createListSchema,
  updateListSchema
}