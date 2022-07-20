import { gql } from '@apollo/client'
// fetchPointTransactions 포인트 내역(충전,적립,사용)

// fetchPointTransactionsOfLoading (포인트 충전 내역)
export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($search: String, $page: Int) {
    fetchPointTransactionsOfLoading(search: $search, page: $page) {
      _id
      amount
      balance
      status
      createdAt
    }
  }
`
// fetchPointTransactionsCountOfLoading (포인트 충전 횟수)
export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`
