const UserModel = require('../models/user.model.js')

const getAllUsers = (req, res) => {
  UserModel.find()
    .then(response => response )
    .catch(err => console.log(err)) // no res
}

const getUser = (req, res) => {
  const id = req.params === undefined ? req.id : req.params.id // Request from graphql OR http
  UserModel.findById(id)
    .then(response => res.json(response))
    .catch(err => res.status(404).json(err))
}

const addUser = (req, res) => {
  const newUser = req.body === undefined ? req : req.body // Request from graphql OR http
  UserModel.create(newUser)
    .then(response => res.json(response))
    .catch(err => res.status(500).json(err))
}

module.exports = {
  getAllUsers,
  getUser, 
  addUser
}