import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      saveBooks {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
      }
    }
  }
`;
