const router = require('express').Router()

const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

// const { graphqlExpress, graphiqlExpress  } = require('apollo-server-express')

const schema = buildSchema(`
  type User {
    id: Int
    name: String
    email: String
  }
  type Query {
    hello: String
    allUsers: [User]
    user(id: Int!): User
  }
`)

const data = [
  { id: 1, name: "1", email: "1.com" },
  { id: 2, name: "2", email: "2.com" },
  { id: 3, name: "3", email: "3.com" }
]

const resolver = {
    hello: () => 'Hello Momo!', 
    allUsers: () => data,
    user: (param) => data.filter( e => e.id === param.id )[0]
}

router.use('/', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true
}))

module.exports = router