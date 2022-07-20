import { gql } from '@apollo/client'

export const FETCH_USEDITEMS_I_PICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      name
      remarks
      contents
      price
      images
    }
  }
`
export const FETCH_USEDITEMS_COUNT_I_PICKED = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`
