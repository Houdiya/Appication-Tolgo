import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation register($phone: String!, $password: String!) {
    register(registerUserInput: { phone: $phone, password: $password }) {
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
