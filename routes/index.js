const router = require('express').Router()
const restRouter = require('./rest.route.js')
const graphqlRouter = require('./graphql.route.js')

router.use('/rest', restRouter)
router.use('/graphql', graphqlRouter)

module.exports = router
