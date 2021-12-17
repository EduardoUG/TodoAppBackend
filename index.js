const express = require('express')
const routerApi = require('./routes/index')
const app = express()

app.use(express.json())

routerApi(app)

const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hola mundo')
})

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})