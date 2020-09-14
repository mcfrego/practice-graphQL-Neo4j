const graphql = require('graphql')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql

const userController = require('../controllers/user.controller')

const userType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString }
  })
})

// ... all model types

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(userType),
      async resolve(parent, args) {
        return await userController.getAllUsers()
      }
    },
    user: {
      type: userType,
      args: { id: { type: GraphQLInt } },
      async resolve(parent, args) {
        return await userController.getUser(args)
      }
    }
  }
})

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    addUser: {
      type: userType,
      args: {},
      async resolve(args) {
        return ''
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutations
})