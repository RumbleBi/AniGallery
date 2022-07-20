import { gql } from '@apollo/client'

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($search: String, $page: Int) {
    fetchPointTransactionsOfSelling(search: $search, page: $page) {
      _id
      amount
      createdAt
      useditem {
        remarks
      }
    }
  }
`
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`
