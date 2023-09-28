const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    _id: ID!
    authors: [author]!
    description: String
    title: String!
    image:
    link:
    
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [Users]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
    
    
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(BookId: ID!, author: String!, title: String!): Book
    removeBook(BookId: ID!): Book  }
`;

module.exports = typeDefs;
