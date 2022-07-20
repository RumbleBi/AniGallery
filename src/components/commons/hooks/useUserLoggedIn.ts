import { gql, useQuery } from '@apollo/client'
import { IQuery } from '../../../commons/types/generated/types'

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
        user
      }
    }
  }
`

export function useFetchUserInfo() {
  const { data } =
    useQuery<Pick<IQuery, 'fetchUserLoggedIn'>>(FETCH_USER_LOGGEDIN)
  return { data }
}
