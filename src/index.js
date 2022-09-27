const express = require('express')
const cors = require('cors')

require('dotenv').config()

require('./database')

const app = express()

const headers = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(headers))

app.use(express.json())

app.use(
  express.urlencoded({
    extended: false,
  }),
)

require('./app/controllers/index')(app)

app.listen(process.env.PORT || 3000)
