import { ApolloQueryResult } from '@apollo/client'
import {
  IQuery,
  IQueryFetchPointTransactionsOfLoadingArgs,
} from '../../../../commons/types/generated/types'

export interface IMypagePointInfoUIProps {
  data: Pick<IQuery, 'fetchPointTransactionsOfLoading'> | undefined
  count: number | undefined
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfLoadingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfLoading'>>
  >
  onClickPWChange: () => void
  onClickPickedList: () => void
  onClickSelling: () => void
  onClickBuying: () => void
  onClickPointInfo: () => void
}
