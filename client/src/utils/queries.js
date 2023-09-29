import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      savedBooks {
        _id
        authors
        title
        description
        image
        link
      }
    }
  }
`;
