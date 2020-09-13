const UserModel = require('../models/user.model.js')

const getAllUsers = (req, res) => {
  UserModel.find()
    .then( response => {
      res.json(response)
    })
    .catch( err => res.status(404).json(err))
}

module.exports = {
  getAllUsers
}