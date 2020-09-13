const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const app = express()

// Load CONFIG and ENVIRONMENT from .env
const environment = process.env.NODE_ENV
let config = require('./.env')
config = config[environment]
if (!config) return console.error(`Invalid ${environment} environment`)

app.use(cors())
app.use(morgan('combined'))
app.use(express.json())
app.use((req, res, next) => {
  console.info('Testing in the middle :-)')
  next()
})

const router = require('./routes/index')
app.use('/api', router)

mongoose.connect(
  config.mongoURL + config.mongoDBName, 
  { useNewUrlParser: true, useUnifiedTopology: true})

app.listen(config.port, (err) => {
  console.info('\n\n' + '>'.repeat(40))
  console.info('GrapgQL + Neo4j Server Live')
  console.info(`PORT: http://localhost:${config.port}`)
  console.info('>'.repeat(40) + '\n\n')
})
