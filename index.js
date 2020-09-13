const cors = require('cors')
const express = require('express')
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

app.get('/', (req, res) => {
  res.json('Hello Momo (finally)!')
})

app.listen(8000, (err) => {
  console.info('\n\n' + '>'.repeat(40))
  console.info('GrapgQL + Neo4j Server Live')
  console.info(`PORT: http://localhost:${config.port}`)
  console.info('>'.repeat(40) + '\n\n')
})
