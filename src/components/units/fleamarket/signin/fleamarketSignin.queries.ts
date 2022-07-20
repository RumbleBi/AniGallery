import gql from "graphql-tag";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
      name
    }
  }
`;
