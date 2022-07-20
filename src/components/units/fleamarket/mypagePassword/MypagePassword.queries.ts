import { gql } from "@apollo/client";

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;
