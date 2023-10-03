const typeDefs = `

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID!
    authors: [String]!
    description: String
    title: String!
    image: String
    link: String
    
  }

  type Auth {
    token: ID!
    user: User
  }


  type Query {
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
    
    
  }

  type Mutation {
    loginUser(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: [String]!, title: String!, description: String, image: String, link: String): User
    removeBook(BookId: ID!): User  }
`;

module.exports = typeDefs;
