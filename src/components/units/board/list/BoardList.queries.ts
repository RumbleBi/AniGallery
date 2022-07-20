import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(page: $page, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
