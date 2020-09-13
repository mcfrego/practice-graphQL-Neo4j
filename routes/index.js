const router = require('express').Router()

const {
  getAllUsers
} = require('../controllers/user.controller.js')

router.get('/', getAllUsers)

module.exports = router