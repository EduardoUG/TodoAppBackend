const express = require('express')
const routerApi = require('./routes/index')
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handler')
const app = express()

app.use(express.json())

routerApi(app)

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hola mundo')
})


// Error handlers
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})