import { ApolloQueryResult } from '@apollo/client'
import {
  IQuery,
  IQueryFetchUseditemsArgs,
  IUseditem,
} from '../../../../commons/types/generated/types'

export interface IFleamarketMainUIProps {
  data?: Pick<IQuery, 'fetchUserLoggedIn'>
  dataItems?: Pick<IQuery, 'fetchUseditems'>
  onClickReg: any
  onLoadMore: () => void
  onClickMoveToDetail: (el: IUseditem) => () => void
  keyword: string
  onChangeKeyword: (value: string) => void
  refetch: (
    variables?: Partial<IQueryFetchUseditemsArgs> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchUseditems'>>>
}
