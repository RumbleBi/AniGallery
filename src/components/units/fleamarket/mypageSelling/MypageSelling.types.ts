import { ApolloQueryResult } from '@apollo/client'
import {
  IQuery,
  IQueryFetchPointTransactionsOfSellingArgs,
} from '../../../../commons/types/generated/types'

export interface IMypageSellingUIProps {
  data: Pick<IQuery, 'fetchPointTransactionsOfSelling'> | undefined
  count: number | undefined
  refetch: (
    variables?: Partial<IQueryFetchPointTransactionsOfSellingArgs> | undefined
  ) => Promise<
    ApolloQueryResult<Pick<IQuery, 'fetchPointTransactionsOfSelling'>>
  >
  onClickPWChange: () => void
  onClickPickedList: () => void
  onClickSelling: () => void
  onClickBuying: () => void
  onClickPointInfo: () => void
}
