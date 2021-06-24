const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
require('./helpers/connectDB.helper')()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/users', require('./routes/users.route'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
