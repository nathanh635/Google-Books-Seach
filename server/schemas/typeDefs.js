const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    authors: [{String}]
    bookId: Int
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    bookCount: Int
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getMe: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [{String!}], description: String!, title: String!, image: String!, link: String!, bookId: Int!): User
    removeBook(bookId: Int!): User
  }
`;

module.exports = typeDefs;
