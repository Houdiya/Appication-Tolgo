import { gql } from "@apollo/client";

export const LOGIN = gql`
  query login($phone: String!, $password: String!) {
    login(loginInput: { phone: $phone, password: $password }) {
      user {
        _id
        phone
        updatedAt
        createdAt
      }
      access_token
    }
  }
`;
